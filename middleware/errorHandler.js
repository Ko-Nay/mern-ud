const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  const defaultErrors = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong, try again later',
  };
  if (err.name === 'ValidationError') {
    defaultErrors.statusCode = StatusCodes.BAD_REQUEST;
    defaultErrors.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
  }

  if (err.code && err.code === 11000) {
    defaultErrors.statusCode = StatusCodes.BAD_REQUEST;
    defaultErrors.message = `${Object.keys(err.keyValue)} has to be unique!`;
  }
  // res.status(defaultErrors.statusCode).json({ msg: err });
  res.status(defaultErrors.statusCode).json({ message: defaultErrors.message });
};

module.exports = errorHandler;
