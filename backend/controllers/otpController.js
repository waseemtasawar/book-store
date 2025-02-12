const Otps = require("../models/otpModel");
const randomstring = require("randomstring");
const sendEmail = require("../utils/sendEmails");

// Generate OTP
function generateOTP() {
  return randomstring.generate({
    length: 4,
    charset: "numeric",
  });
}

// Send OTP to the provided email

exports.sendOTP = async (req, res, next) => {
  try {
    const { email } = req.body;
    const otp = generateOTP();
    const newOTP = new Otps({ email, otp });
    await newOTP.save();

    await sendEmail({
      to: email,
      sunject: "Your OTP",
      message: `<p> Your OTP is <strong>${otp}</strong></p>`,
    });
    res.status(200).json({
      status: "success",
      message: "OTP send successfully",
    });
  } catch (error) {
    console.log("Error sending OTP", error);
    res.status(500).json({
      status: "fail",
      error: "internal server error",
    });
  }
};

// Verify OTP provided by the user
exports.verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const existingOTP = await Otps.findOneAndDelete({ email, otp });

    if (existingOTP) {
      res.status(200).json({
        status: "success",
        message: "OPT verification successful",
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Invalid OTP",
      });
    }
  } catch (error) {
    console.log("Error verification OTP");
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};
