const jwt = require('jsonwebtoken');
const config = require('../../config');

exports.generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.role,
  };
  const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.token_expires_in,
  });
  return token;
};
