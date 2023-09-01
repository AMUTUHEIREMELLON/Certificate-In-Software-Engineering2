const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  phonenumber1: {
    type: String,
  },
  phonenumber2: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  
  
});

module.exports = mongoose.model("register", registerSchema);
