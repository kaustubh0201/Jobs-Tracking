const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (error, request, response, next) => {

  let customError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || 'Something went wrong try again later'
  }

  if (error instanceof CustomAPIError) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  if (error.name === 'ValidationError') {
    console.log(Object.values(error.errors));
    customError.message = Object.values(error.errors)
        .map((item) => item.message)
        .join(',');
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (error.code && error.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(error.keyValue)} fields, please choose another value!`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (error.name === 'CastError') {
    customError.message = `No item found with id: ${error.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }

  return response.status(customError.statusCode).json({ message: customError.message });
}

module.exports = errorHandlerMiddleware;