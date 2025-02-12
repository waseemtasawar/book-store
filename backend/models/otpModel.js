const mongoose = require("mongoose");

const validator = require("validator");
const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "A user must have a email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  opt: {
    type: String,
    required: true,
  },
});

const Otps = mongoose.model("otps", otpSchema);

module.exports = Otps;
