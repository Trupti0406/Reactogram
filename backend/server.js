const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config");
const path = require("path");

global.__basedir = __dirname;
mongoose.connect(MONGODB_URL);

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});
mongoose.connection.on("error", (error) => {
  console.log("Some error occured while connecting to data");
});

require("./models/user_model");
require("./models/post_model");

app.use(cors());
app.use(express.json());

// registering user schema
app.use(require("./routes/user_route"));
app.use(require("./routes/post_route"));
app.use(require("./routes/file_route"));

// accessing static files for hosting purpose
app.use(express.static(path.join(__dirname, "../frontend/build"))); //configuring
//accessing

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Server started");
});
