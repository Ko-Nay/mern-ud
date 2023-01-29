const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom_error');

/* extended CutomAPIError for BAD_REQUEST status codes */
class BAD_REQUEST_Error extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BAD_REQUEST_Error;
