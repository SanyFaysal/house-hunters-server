const House = require("../house/house.model");
const User = require("./user.model");

exports.registerService = async (data) => {
  const result = await User.create(data);
  return result;
};
exports.findUserByEmailService = async (email) => {
  const result = await User.findOne({ email })
  return result;
};
exports.addToWishlistService = async (email, houseId, userId) => {
  
  const result = await User.findOneAndUpdate(
    { email },
    { $push: { wishlist: houseId } }
  );
  await House.findOneAndUpdate({_id:houseId}, {$push: {wishedBy:userId}})
  return result;
};


exports.removeFromWishlistService = async (email, houseId, userId) => {
  
  const result = await User.findOneAndUpdate(
    { email },
    { $pull: { wishlist: houseId } }
  );
  await House.findOneAndUpdate({_id:houseId}, {$pull: {wishedBy:userId}})
  return result;
};


exports.getWishlistService = async (email) => {
  const result = await User.findOne({ email }).populate("wishlist")
  console.log(result.wishlist)
  return result;
};
