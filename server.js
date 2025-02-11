const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

const personRoutes = require("./routes/personRoutes");
app.use('/person',personRoutes);
const menuRoutes = require("./routes/menuRoutes");
app.use('/menuItem',menuRoutes);

app.listen(3000);
