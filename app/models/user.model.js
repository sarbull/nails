const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    profile: {
      firstName: { type: String },
      lastName: { type: String }
    }
  },
  {
    timestamps: true
  });

module.exports = mongoose.model('User', UserSchema);
