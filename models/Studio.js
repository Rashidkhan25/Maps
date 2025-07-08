const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: String,
  price: String,
  batch: String,
  address: {
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
  },
  keywords: {
    type: [String],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Studio', studioSchema);
