const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  // cb => content buffer
  destination: (req, file, cb) => {
    cb(null, "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 1,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return res.status(400).json({
        error: "Invalid file type, please upload .jpg, .png, .jpeg file",
      });
    }
  },
});
//  Functionality to upload file
router.post("/uploadFile", upload.single("file"), function (req, res) {
  res.json({ FileName: req.file.filename });
});

// functionality to download file
const downloadFile = (req, res) => {
  const fileName = req.params.filename;
  const path = __basedir + "/uploads";

  res.download(path + fileName, (error) => {
    if (error) {
      req.status(500).send({ message: "File cannot br downloaded" });
    }
  });
};
router.get("/files/:filename", downloadFile);

module.exports = router;
