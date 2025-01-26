// const sessionToUser = new Map();
require('dotenv').config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

// exports.setUser(id,user){
//   sessionToUser.set(id,user);
// }

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