const House = require('./house.model');

exports.addHouseService = async (data) => {
  const result = await House.create(data);
  return result;
};
exports.getHouseService = async (data) => {
  const result = await House.find({}).populate({
    path: 'owner.ownerInfo',
    select: 'fullName email phoneNumber',
  });
  return result;
};
exports.getSingleHouseService = async (id) => {
  const result = await House.findOne({ _id: id }).populate({
    path: 'owner.ownerInfo',
    select: 'fullName email phoneNumber',
  });
  return result;
};
exports.updateHouseService = async (id, data) => {
  const result = await House.findOneAndUpdate(
    { _id: id },
    { $set: data },
    { new: true }
  );
  return result;
};
exports.deleteHouseService = async (id) => {
  const result = await House.deleteOne({ _id: id });
  return result;
};
