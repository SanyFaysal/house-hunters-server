const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const config = require('../../config');
const { findUserByEmailService } = require('../modules/user/user.service');
exports.verifyToken = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(' ')[1];

    if (!token) {
      return res.status(403).json({
        status: 'failed',
        error: 'Token not found',
      });
    }
    const decoded = await promisify(jwt.verify)(token, config.jwt.secret);

    const user = await findUserByEmailService(decoded.email);
    req.user = user;
    next();
  } catch (error) {}
};
