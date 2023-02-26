const express = require("express");
const app = express();
const PORT = 5000;

app.get("/welcome", (req, res) => {
  res.status(200).json({ msg: "Hey there, how are you " });
});
app.listen(PORT, () => {
  console.log("Server started");
});
