const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom_error');

/* extended CutomAPIError for NOT_FOUND status codes */
class NOT_FOUND_Error extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NOT_FOUND_Error;
