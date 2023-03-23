const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserModel = mongoose.model("PostModel");
const protectedRoute = require("../middlewares/protectedResource");

router.post("/createpost", protectedRoute, (req, res) => {
  const { description, location, image } = req.body;
  if (!description || !location || !imaage) {
    return res
      .status(400)
      .json({ error: "One or more mandatory fields are empty" });
  }
  req.user.password = undefined;
  const postObj = new PostModel({
    description: description,
    location: location,
    image: image,
    author: req.user,
  });
  postObj
    .save()
    .then((newpost) => {
      res.status(201).json({ post: newpost });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
