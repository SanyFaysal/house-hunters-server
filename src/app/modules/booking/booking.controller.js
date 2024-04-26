const Booking = require('./booking.model');
const {
  deleteSingleBookingService,
  addBookingService,
  getBookingsService,
} = require('./booking.service');

exports.addBooking = async (req, res) => {
  try {
    const data = req.body;
    const { email } = data;
    const haveSpace = await Booking.find({ email: email });

    if (haveSpace.length >= 2) {
      return res.status(400).json({
        status: 'false',
        error: "Ops ! you haven't any space to book ",
      });
    }
    const result = await addBookingService(data);
    res.status(200).json({
      status: 'Success',
      message: 'Successfully added house',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.getBookings = async (req, res) => {
  try {
    const result = await getBookingsService();
    res.status(200).json({
      status: 'Success',
      message: 'Successfully retrieve houses',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};

exports.deleteSingleBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteSingleBookingService(id);
    res.status(200).json({
      status: 'Success',
      message: 'Successfully deleted houses',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.deleteAllBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await this.deleteAllBookings(id);
    res.status(200).json({
      status: 'Success',
      message: 'Successfully deleted houses',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
