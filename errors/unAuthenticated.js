const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom_error');

/* extended CutomAPIError for BAD_REQUEST status codes */
class UN_AUTHENTICATED_Error extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UN_AUTHENTICATED_Error;
