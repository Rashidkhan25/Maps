const express = require("express");
const router  = express.Router();
const Student = require("../models/Student");  // adjust path if needed

// GET /api/students/search?name=Pooja
router.get("/search", async (req, res) => {
  res.setHeader("Cache-Control", "no-store"); // 🛑 disable caching

  const name = req.query.name || "";
  if (!name) return res.status(400).json({ message: "Missing name query" });

  try {
    const student = await Student.findOne({
      name: { $regex: new RegExp(name, "i") },
      lat: { $ne: null },
      lng: { $ne: null }
    }).lean();

    if (!student) return res.status(404).json({ message: "Not found" });
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;