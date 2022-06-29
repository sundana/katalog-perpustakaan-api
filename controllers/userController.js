const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// @desc    Register user
// @route   POST /user/register
// @access  Public
const registerUser = (req, res) => {
  res.status(200).json({ message: 'Register user' });
};

// @desc    Register user
// @route   POST /user/register
// @access  Public
const loginUser = (req, res) => {
  res.status(200).json({ message: 'Login user' });
};

// @desc    Register user
// @route   POST /user/register
// @access  Public
const getMe = (req, res) => {
  res.status(200).json({ message: 'My data' });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
