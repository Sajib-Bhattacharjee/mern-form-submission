// controllers/formController.js
const Form = require("../models/Form");
const multer = require("multer");
const path = require("path");

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage }).single("resume");

// Handle form submission
const submitForm = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).send("File upload failed");

    const {
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      url,
      selectedOption,
      about,
    } = req.body;

    try {
      const form = new Form({
        firstName,
        lastName,
        email,
        contact,
        gender,
        subjects: JSON.parse(subjects), // Handle as an object
        resume: req.file.filename, // resume file path
        url,
        selectedOption,
        about,
      });

      await form.save();
      res.status(201).send("Form submitted successfully");
    } catch (error) {
      res.status(400).send("Form submission failed");
    }
  });
};

module.exports = { submitForm };
