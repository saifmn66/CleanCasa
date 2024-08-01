const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  pass: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Users', UserSchema);
