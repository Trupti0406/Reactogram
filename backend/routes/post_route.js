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
    .populate("comments.commentedBy", "fullName ")

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

// Like or unlike post API, update
router.put("/like", protectedRoute, (req, res) => {
  PostModel.findByIdAndUpdate(
    req.body.postId,
    {
      $addToSet: { likes: req.user._id },
    },
    {
      new: true, //returns the updated recored i.e. liked
    }
  )
    .populate("author", "_id fullName")
    .exec((error, result) => {
      if (error) {
        return res.status(400).json({ error: error });
      } else {
        res.json(result);
      }
    });
});

// Unlike
router.put("/unlike", protectedRoute, (req, res) => {
  PostModel.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true, //returns updated record
    }
  )
    .populate("author", "_id fullName")
    .exec((error, result) => {
      if (error) {
        return res.status(400).json({ error: error });
      } else {
        res.json(result);
      }
    });
});

// Comment API
router.put("/comment", protectedRoute, (req, res) => {
  const comment = {
    commentText: req.body.commentText,
    commentedBy: req.user._id,
  };
  PostModel.findByIdAndUpdate(
    req.body.postId,
    {
      // USing pull here because our likes array has already been created
      $push: { comments: comment },
    },
    {
      new: true, //returns the updated recored i.e. liked
    }
  )
    // to see who commented the comment
    .populate("comments.commentedBy", "_id fullName") //comment owner
    .populate("author", "_id fullName") //post owner
    .exec((error, result) => {
      if (error) {
        return res.status(400).json({ error: error });
      } else {
        res.json(result);
      }
    });
});

module.exports = router;
