/* call back fun needs to  async since it communicate to the database*/
/* we need to import/setup the model that we wanna work with */

const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BAD_REQUEST_Error } = require('../errors/index');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new BAD_REQUEST_Error('Please provide all values');
    }

    const existedEmail = await User.findOne({ email });
    if (existedEmail) {
      throw new BAD_REQUEST_Error('Email is already registered!');
    }

    const user = await User.create({ name, email, password });
    const token = user.createJWT();
    res
      .status(StatusCodes.CREATED)
      .json({ user, token, location: this.location });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  res.status(201).send('Login');
};

const updateUser = async (req, res) => {
  res.status(201).send('Update Users');
};

module.exports = { register, login, updateUser };
