const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Student = require('./models/Student');
const Studio = require('./models/Studio');
const Teacher = require('./models/Teacher');
const studentSearch = require("./routes/student");

require('dotenv').config();

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Express config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/students", studentSearch);

// Routes for pages
app.get("/", (req, res) => res.render("index"));
app.get("/admin", (req, res) => res.render("addStudent"));
app.get("/admin/studio", (req, res) => res.render("addStudio"));
app.get("/admin/teacher", (req, res) => res.render("addTeacher"));


// Add these routes to serve your data as JSON
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

app.get("/api/studios", async (req, res) => {
  try {
    const studios = await Studio.find({});
    res.json(studios);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch studios" });
  }
});

app.get("/api/teachers", async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch teachers" });
  }
});


// student logic
app.post("/addStudent", async (req, res) => {
  const newStudent = req.body;
  newStudent.lat = parseFloat(newStudent.lat);
  newStudent.lng = parseFloat(newStudent.lng);

  if (
    !newStudent.name ||
    !newStudent.email ||
    !newStudent.phone ||
    !newStudent.hobby ||
    !newStudent.address ||
    isNaN(newStudent.lat) ||
    isNaN(newStudent.lng)
  ) {
    return res.status(400).send("Invalid student data.");
  }

  try {
    const student = new Student(newStudent);
    await student.save();
    res.send("✅ Student added successfully and saved to MongoDB!");
  } catch (err) {
    console.error("MongoDB save error:", err);
    res.status(500).send("Error saving student to database.");
  }
});

// 📌 Studio logic 
app.post("/addStudio", async (req, res) => {
  const newStudio = req.body;

  if (
    !newStudio.name ||
    !newStudio.phone ||
    !newStudio.price ||
    !newStudio.batch ||
    !newStudio.address ||
    typeof newStudio.lat !== "number" ||
    typeof newStudio.lng !== "number" ||
    !Array.isArray(newStudio.keywords)
  ) {
    return res.status(400).send("Invalid studio data.");
  }

  try {
    const studio = new Studio(newStudio);
    await studio.save();
    res.send("✅ Studio added successfully and saved to MongoDB!");
  } catch (err) {
    console.error("MongoDB save error (studio):", err);
    res.status(500).send("Error saving studio to database.");
  }
});

// 📌 Teacher logic 
app.post("/addTeacher", async (req, res) => {
  try {
    const teacherData = req.body;
    if (typeof teacherData.hobby === "string") {
      try {
        const parsed = JSON.parse(teacherData.hobby);
        if (Array.isArray(parsed)) {
          teacherData.hobby = parsed;
        } else {
          return res.status(400).send("❌ Hobby must be an array.");
        }
      } catch (e) {
        return res.status(400).send("❌ Invalid hobby format.");
      }
    }

    const requiredFields = ["name", "address", "location", "lat", "lng"];
    for (const field of requiredFields) {
      if (!teacherData[field]) {
        return res.status(400).send(`❌ Missing required field: ${field}`);
      }
    }

    const teacher = new Teacher(teacherData);
    await teacher.save();

    res.send("✅ Teacher saved successfully to MongoDB!");
  } catch (err) {
    console.error("🔥 Error saving teacher:", err);
    res.status(500).send("❌ Server error while saving teacher.");
  }
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).render("404");
});

// Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
