const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
const port = 3000;

// Configure Paths
const viewsPath = path.join(__dirname, "../templates/views");
const publicPath = path.join(__dirname, "../public");

// Configure Static
app.use(express.static(publicPath));

// Configure View
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Routers
app.get("/", (req, res) => {
  res.render("form", { greetings: "Hello World ~!" });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
