const mongoose = require("mongoose");

const validator = require("validator");
const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

const Otps = mongoose.model("otps", otpSchema);

module.exports = Otps;
