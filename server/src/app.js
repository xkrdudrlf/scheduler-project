const path = require("path");
const express = require("express");
const cors = require("cors");
const hbs = require("hbs");
const app = express();
const port = 3000;

// Configure Paths
const viewsPath = path.join(__dirname, "../templates/views");
const publicPath = path.join(__dirname, "../public");

// Configure Static
app.use(express.static(publicPath));
app.use(express.json());
app.use(cors());

// Configure View
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Routers
app.get("/", (req, res) => {
  res.render("form", { greetings: "Hello World ~!" });
  console.log("get method");
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log("Something has arrived !");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
