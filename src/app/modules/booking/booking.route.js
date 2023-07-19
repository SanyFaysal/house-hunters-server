const express = require('express');
const bookingControllers = require('./booking.controller');
const user_role = require('../../constants/userRole');
const { verifyToken } = require('../../middlewares/verifyToken');
const { authorization } = require('../../middlewares/authorization');

const router = express.Router();

router.post(
  '/addBooking',
  verifyToken,
  authorization('houseRenter'),
  bookingControllers.addBooking
);
router
  .route('/')
  .get(
    verifyToken,
    authorization('houseRenter'),
    bookingControllers.getBookings
  )
  .delete(
    verifyToken,
    authorization('houseRenter'),
    bookingControllers.deleteAllBookings
  );

router.delete(
  '/:id',
  verifyToken,
  authorization('houseRenter'),
  bookingControllers.deleteSingleBooking
);

module.exports = router;
