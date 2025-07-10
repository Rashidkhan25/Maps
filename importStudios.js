// importStudios.js
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import studioData from './public/js/studentData.js'; // Make sure it's exported properly as default
import Studio from './models/Student.js';

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("📦 Connected to MongoDB");

  const validStudios = studioData.filter(
    (s) => s.name && s.address && s.lat && s.lng
  );

  await Studio.insertMany(validStudios);
  console.log("✅ Students imported successfully!");
  process.exit();
} catch (err) {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
}
