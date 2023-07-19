const express = require('express');
const bookingControllers = require('./booking.controller');

const router = express.Router();

router.post('/addBooking', bookingControllers.addBooking);
router
  .route('/')
  .get(bookingControllers.getBookings)
  .delete(bookingControllers.deleteAllBookings);

router.delete('/:id', bookingControllers.deleteSingleBooking);

module.exports = router;
