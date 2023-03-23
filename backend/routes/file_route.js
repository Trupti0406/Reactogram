const express = require("express");
const router = express.Router();
const muter = require("multer");

const storage = muter.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "/uploads");
  },
  filename: (req, res, cb) => {
    cb(null, originalname);
  },
});

const upload = muter({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 1,
  },
  fileFilter: (req, res, cb) => {
    if (
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return res
        .status(400)
        .json({
          error: "Invalid file type, please upload .jpg, .png, .jpeg file",
        });
    }
  },
});

module.exports = router;
