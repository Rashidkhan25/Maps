const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  hobby: String,
  address: String,
  lat: Number,
  lng: Number,
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
