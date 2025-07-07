const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

// Routes for pages
app.get("/", (req, res) => res.render("index"));

app.get("/admin", (req, res) => {
  res.render("addStudent");
});

app.get("/admin/studio", (req, res) => {
  res.render("addStudio");
});

app.get("/admin/teacher", (req, res) => {
  res.render("addTeacher");
});

app.post("/addStudent", (req, res) => {
  const newStudent = req.body;

  if (
    !newStudent.name ||
    !newStudent.email ||
    !newStudent.phone ||
    !newStudent.hobby ||
    !newStudent.address ||
    typeof newStudent.lat !== "number" ||
    typeof newStudent.lng !== "number"
  ) {
    return res.status(400).send("Invalid student data.");
  }

  const filePath = path.join(__dirname, "public/js/studentData.js");

  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
      console.error("Error reading studentData.js:", err);
      return res.status(500).send("Error reading student data.");
    }

    try {
      const pattern = /studentLocations\s*=\s*\[(.*)\];/s;
      const match = content.match(pattern);

      if (!match) {
        return res.status(500).send("studentLocations array not found.");
      }

      const currentData = match[1].trim();
      const updatedData =
        currentData.length > 0
          ? currentData + ",\n  " + JSON.stringify(newStudent, null, 2)
          : JSON.stringify(newStudent, null, 2);

      const newContent = content.replace(
        pattern,
        `studentLocations = [\n  ${updatedData}\n];`
      );

      fs.writeFile(filePath, newContent, "utf-8", (err) => {
        if (err) {
          console.error("Error writing to studentData.js:", err);
          return res.status(500).send("Error saving student.");
        }

        res.send("✅ Student added successfully!");
      });
    } catch (e) {
      console.error("Parsing error:", e);
      res.status(500).send("Server error while processing data.");
    }
  });
});

// Handle studio submission
app.post("/addStudio", (req, res) => {
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

  const studioFile = path.join(__dirname, "public/js/studioData.js");

  fs.readFile(studioFile, "utf-8", (err, content) => {
    if (err) {
      console.error("Error reading studioData.js:", err);
      return res.status(500).send("Error reading studio data.");
    }

    const pattern = /studioLocations\s*=\s*\[(.*)\];/s;
    const match = content.match(pattern);

    if (!match) return res.status(500).send("studioLocations array not found.");

    const currentData = match[1].trim();
    const updatedData =
      currentData.length > 0
        ? currentData + ",\n  " + JSON.stringify(newStudio, null, 2)
        : JSON.stringify(newStudio, null, 2);

    const newContent = content.replace(
      pattern,
      `studioLocations = [\n  ${updatedData}\n];`
    );

    fs.writeFile(studioFile, newContent, "utf-8", (err) => {
      if (err) {
        console.error("Error writing to studioData.js:", err);
        return res.status(500).send("Error saving studio.");
      }

      res.send("✅ Studio added successfully!");
    });
  });
});

// POST route to save teacher data
app.post("/addTeacher", (req, res) => {
  const newTeacher = req.body;

  if (
    !newTeacher.name ||
    !Array.isArray(newTeacher.hobby) ||
    !newTeacher.address ||
    !newTeacher.location ||
    typeof newTeacher.lat !== "number" ||
    typeof newTeacher.lng !== "number"
  ) {
    return res.status(400).send("Invalid teacher data.");
  }

  const teacherFile = path.join(__dirname, "public/js/TeachersData.js");

  fs.readFile(teacherFile, "utf-8", (err, content) => {
    if (err) return res.status(500).send("Error reading teacherData.js");

    const match = content.match(/teacherLocations\s*=\s*\[(.*)\];/s);
    if (!match) return res.status(500).send("teacherLocations array not found.");

    const currentData = match[1].trim();
    const updatedData =
      currentData.length > 0
        ? currentData + ",\n  " + JSON.stringify(newTeacher, null, 2)
        : JSON.stringify(newTeacher, null, 2);

    const newContent = content.replace(
      /teacherLocations\s*=\s*\[.*\];/s,
      `teacherLocations = [\n  ${updatedData}\n];`
    );

    fs.writeFile(teacherFile, newContent, "utf-8", (err) => {
      if (err) return res.status(500).send("Error saving teacher.");
      res.send("✅ Teacher added successfully!");
    });
  });
});


app.use((req, res, next) => {
  res.status(404).render("404");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
