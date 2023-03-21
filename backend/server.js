const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config");

mongoose.connect(MONGODB_URL);

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});
mongoose.connection.on("error", (error) => {
  console.log("Some error occured while connecting to data");
});

require("./models/user_model")

app.use(cors())
app.use(express.json())

// registering user schema
require("./models/user_model")
app.use(require('./routes/user_route'))

app.listen(PORT, () => {
  console.log("Server started");
});
