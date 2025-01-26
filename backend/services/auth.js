require('dotenv').config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

exports.setUser = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secret);
};

exports.getUser = (token) => {
  if (!token) {
    return null;
  }

  return jwt.verify(token, secret);
};