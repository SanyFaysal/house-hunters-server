const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require("bcryptjs");

const houseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    roomSize: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    availabilityDate: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    rentPerMonth: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      email: {
        type: String,
        require: true,
      },
      ownerInfo: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    },
    wishedBy: [
      {
        type: ObjectId,
        ref:'User',
      },
    ],
    questions: [
      {
        qus: String,
        created_at: {
          type: Date,
          default: Date.now,
        },
        answers: [
          {
            ans: String,
            created_At: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
    ],
  },

  {
    timeStamps: { createdAt: true, updatedAt: false },
  }
);

const House = mongoose.model("House", houseSchema);

module.exports = House;
