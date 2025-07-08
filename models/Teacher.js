const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String, // or Number if it will eventually be numeric
    default: ""
  },
  hobby: {
    type: [String], // stored as an array of strings
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
