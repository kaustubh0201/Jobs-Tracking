const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const register = async (request, response) => {
    const user = await User.create({ ...request.body });
    const token = user.createJWT();
    response.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}

const login = async (request, response) => {
    const { email, password } = request.body;

    if (!email || !password) {
        throw new BadRequestError('Please provide email and password!');
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new UnauthenticatedError('Invalid credentials!');
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid credentials!');
    }

    const token = user.createJWT();

    response.status(StatusCodes.OK).json({ user: { name: user.name }, token });
}

module.exports = {
    register,
    login
};