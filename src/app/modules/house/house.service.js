const House = require('./house.model');

exports.addHouseService = async (data) => {
  const result = await House.create(data);
  return result;
};
exports.getHouseService = async (sort, filter, pagination) => {
  const result = await House.find({}).populate({
    path: 'owner.ownerInfo',
    select: 'fullName email phoneNumber',
  });
  return result;
};

exports.getHouseService = async (filters, pagination) => {
  // const query = {};

  // if (filters?.city?.length) {
  //   query.city = { $regex: filters.city };
  // }
  // if (filters?.bedrooms) {
  //   query.bedrooms = { $in: filters.bedrooms };
  // }
  // if (filters?.bathrooms?.length) {
  //   query.bathrooms = { $in: filters.bathrooms };
  // }
  // if (filters?.roomSize?.length) {
  //   query.roomSize = { $regex: filters.roomSize };
  // }
  // if (filters?.availabilityDate?.length) {
  //   query.availabilityDate = { $in: filters.availabilityDate };
  // }
  // if (filters?.rentPerMonth?.length) {
  //   query.rentPerMonth = {
  //     $gte: filters.rentPerMonth[0],
  //     $lte: filters.rentPerMonth[1],
  //   };
  // }
  // console.log(query);
  const result = await House.find()
    .skip(pagination.skip)
    .limit(pagination.limit);
  const totalFound = await House.find().count();
  const total = await House.countDocuments();
  const pageFound = Math.ceil(totalFound / pagination.limit);

  return { result, pageFound, total };
};

exports.getMyHouseService = async (email) => {
  const result = await House.find({ 'owner.email': email }).populate({
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


exports.addQuestionService = async (id, data) => {
  console.log({DAT:data})
  const result = await House.findOneAndUpdate(
    { _id: id },
    { $push: {questions:data} },
    { new: true }
  );
  return result;
};
exports.makeAnswerService = async (houseId, questionId, data) => {

  const result = await House.findOneAndUpdate(
    { _id: houseId, 'questions._id':questionId },
    { $push: {"questions.$.answers":data} },
    { new: true }
  );
  return result;
};