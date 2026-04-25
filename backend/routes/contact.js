console.log("✅ CONTACT ROUTE FILE LOADED");

const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  console.log("BODY RECEIVED:", req.body); // 🔥 DEBUG

  try {
    const { name, email, message } = req.body;

    // 🔥 Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(200).json({ message: "Saved successfully" });

  } catch (err) {
    console.error("❌ ERROR:", err.message);   // 🔥 SHOW REAL ERROR
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;