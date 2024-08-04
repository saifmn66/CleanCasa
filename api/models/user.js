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
  },
  role: {
    type: String,
    required: true,
    default: 'user'
  }
}, { timestamps: true });

module.exports = mongoose.model('Users', UserSchema);
