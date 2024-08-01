const mongoose = require('mongoose');

const AppoitmentSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  message: {
    type: String,
    required: false, 
  },
 
}, { timestamps: true });

module.exports = mongoose.model('appointment', AppoitmentSchema);
