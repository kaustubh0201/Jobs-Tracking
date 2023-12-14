const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors/bad-request');
const bcrypt = require('bcryptjs');

const register = async (request, response) => {
    const user = await User.create({ ...request.body });
    response.status(StatusCodes.CREATED).json(request.body);
}

const login = async (request, response) => {
    response.send('Login User!');
}

module.exports = {
    register,
    login
};