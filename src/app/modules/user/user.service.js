const User = require('./user.model');

export const registerService = async (data) => {
  const result = await User.create(data);
  return result;
};
export const findUserByEmailService = async (email) => {
  const result = await User.findOne({ email });
  return result;
};
