const User = require('./user.model');

exports.registerService = async (data) => {
  const result = await User.create(data);
  return result;
};
exports.findUserByEmailService = async (email) => {
  const result = await User.findOne({ email });
  return result;
};
