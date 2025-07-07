const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes for pages
app.get("/", (req, res) => res.render("index"));

app.get('/add-student', (req, res) => {
  res.render('addStudent');
});

// Route for 404 error
app.use((req, res, next) => {
  res.status(404).render("404");
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
