const Booking = require('./booking.model');

exports.addBookingService = async (data) => {
  const result = await Booking.create(data);
  return result;
};
exports.getBookingsService = async (data) => {
  const result = await Booking.find({}).populate({
    path: 'house',
  });
  return result;
};
exports.deleteSingleBookingService = async (id) => {
  const result = await House.deleteOne({ _id: id });
  return result;
};
exports.deleteAllHouseService = async () => {
  const result = await House.deleteMany({});
  return result;
};
