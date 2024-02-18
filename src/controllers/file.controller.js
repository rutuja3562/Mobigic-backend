const express = require("express");
const router = express.Router();

const File = require("../models/file.model");
const Authenticate = require("../middlewares/authenticate.js");
const upload = require("../middlewares/uploads");

router.get("", async (req, res) => {
  try {
    const users = await File.find().lean().exec();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// router.post("", Authenticate, upload.single("profilePic"), async (req, res) => {
router.post("", upload.single("profilePic"), async (req, res) => {
  console.log("pppp...", req.body);
  try {
    //   const user = await User.create(req.body)
    const user = await File.create({
      username: req.body.username,
      profilePic: req.body.profilePic,
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/multiple", upload.any("profilePic"), async (req, res) => {
  console.log("pppp...........", req.files);
  try {
    const filePaths = req.files.map((file) => {
      return file.path;
    });

    const user = await File.create({
      username: req.body.username,
      profilePic: filePaths,
    });

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
module.exports = router;
