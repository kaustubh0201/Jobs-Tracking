const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const auth = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('Authentication invalid!');
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        request.user = { userId: payload.userId, name: payload.name };
        console.log(request.user);
        next();
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid!');
    }
};

module.exports = auth;