const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const PostModel = mongoose.model("PostModel");
const protectedRoute = require("../middlewares/protectedResource");

// Get request to get posts from all users. i.e. this will have posts from all users

// not adding protected middleware, because we want to make the user see
// all the posts from other users without logging in
router.get("/allposts", (req, res) => {
  PostModel.find()
    .populate("author", "_id fullName profileImg")
    .then((dbPosts) => {
      res.status(200).json({ posts: dbPosts });
    })
    .catch((error) => {
      console.log(error);
    });
});

// All Posts for only logged in user
router.get("/myallposts", protectedRoute, (req, res) => {
  PostModel.find({ author: req.user._id })
    .populate("author", "_id fullName profileImg")
    .then((dbPosts) => {
      res.status(200).json({ posts: dbPosts });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/createpost", protectedRoute, (req, res) => {
  const { description, location, image } = req.body;
  if (!description || !location || !image) {
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

// To delete the post, only logged in user can delete the post
router.delete("/deletepost/:postId", protectedRoute, (req, res) => {
  // Check if the post exists or not
  PostModel.findOne({ _id: req.params.postId })
    .populate("author", "_id")
    .exec((error, postFound) => {
      if (error || !postFound) {
        return res.status(400).json({ error: "Post does not exist" });
      }
      // Check if the post author is same as logged in user, ony then allow deletion
      if (postFound.author._id.toString() == req.user._id.toString()) {
        postFound
          .remove()
          .then((data) => {
            res.status(201).json({ result: data });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
});

module.exports = router;
