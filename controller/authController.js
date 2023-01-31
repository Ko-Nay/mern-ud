/* call back fun needs to  async since it communicate to the database*/
/* we need to import/setup the model that we wanna work with */

const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const {
  BAD_REQUEST_Error,
  UN_AUTHENTICATED_Error,
} = require('../errors/index');

/****** REGISTER ******/
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
    res.status(StatusCodes.CREATED).json({
      user: {
        name: user.name,
        email: user.email,
        lastName: user.lastName,
        location: user.location,
      },
      token,
      location: user.location,
    });
  } catch (error) {
    next(error);
  }
};

/****** LOGIN ******/

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BAD_REQUEST_Error('Please provide all values');
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UN_AUTHENTICATED_Error('Invalid user');
  }
  // console.log('user: ', user);

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UN_AUTHENTICATED_Error('Invalid password');
  }

  const token = user.createJWT();
  /* password is not shown in the res*/
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

/****** UPDATE ******/
const updateUser = async (req, res) => {
  res.status(201).send('Update Users');
};

module.exports = { register, login, updateUser };
