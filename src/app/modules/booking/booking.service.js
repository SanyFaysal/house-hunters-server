const Booking = require('./booking.model');

exports.addBookingService = async (data) => {
  console.log(data)
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
  const result = await Booking.deleteOne({ _id: id });
  return result;
};
exports.deleteAllHouseService = async () => {
  const result = await Booking.deleteMany({});
  return result;
};
