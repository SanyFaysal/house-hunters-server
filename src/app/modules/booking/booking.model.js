const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require('bcryptjs');

const bookingSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid phone number'],
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      minLength: 11,
      validate: [
        validator.isMobilePhone,
        'Please provide a valid phone number',
      ],
    },
    house: {
      type: mongoose.Types.ObjectId,
      ref: 'House',
    },
  },

  {
    timeStamps: { createdAt: true, updatedAt: false },
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
