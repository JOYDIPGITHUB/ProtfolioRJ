const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(200).json({ message: "Message received!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit contact form." });
  }
});

module.exports = router;