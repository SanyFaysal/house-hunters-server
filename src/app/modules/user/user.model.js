const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
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
    role: {
      type: String,
      enum: {
        values: ['houseOwner', 'houseRenter'],
        message: "{VALUE} can't be a role !!! ",
      },
    },
    password: {
      type: string,
      required: true,
    },
  },

  {
    timeStamps: { createdAt: true, updatedAt: false },
  }
);

userSchema.methods.comparePassword = function (password, hash) {
  const isValidPassword = bcrypt.compareSync(password, hash);
  return isValidPassword;
};
const User = mongoose.model('User', userSchema);

module.exports = User;
