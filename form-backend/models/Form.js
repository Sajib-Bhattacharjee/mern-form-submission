// models/Form.js
const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  gender: { type: String, required: true },
  subjects: { type: Map, of: Boolean },
  resume: { type: String, required: true },
  url: { type: String, required: true },
  selectedOption: { type: String, required: true },
  about: { type: String, required: true },
});

const Form = mongoose.model("Form", formSchema);
module.exports = Form;
