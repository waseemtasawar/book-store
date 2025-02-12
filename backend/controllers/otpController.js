const Otps = require("../models/otpModel");
const randomstring = require("randomstring");
const sendEmail = require("../utils/sendEmails");

// Generate OTP
function generateOTP() {
  const otp = randomstring.generate({
    length: 4,
    charset: "numeric",
  });
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes
  return { otp, expiresAt };
}

// Send OTP to the provided email

// Send OTP to the provided email
exports.sendOTP = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        status: "fail",
        message: "Email is required",
      });
    }

    // Delete any existing OTPs before generating a new one
    await Otps.deleteMany({ email });

    const { otp, expiresAt } = generateOTP();

    const newOTP = new Otps({ email, otp, expiresAt });
    await newOTP.save();

    await sendEmail({
      to: email,
      subject: "Your OTP",
      message: `<p>Your OTP is <strong>${otp}</strong></p>`,
    });

    res.status(200).json({
      status: "success",
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log("Error sending OTP", error);
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};

// Verify OTP provided by the user
exports.verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const existingOTP = await Otps.findOne({ email, otp });

    // Check if OTP has expired
    if (!existingOTP || new Date() > existingOTP.expiresAt) {
      return res.status(400).json({
        status: "fail",
        message: "OTP is invalid or has expired",
      });
    }

    await Otps.findOneAndDelete({ email, otp }); // Delete OTP after successful verification

    res.status(200).json({
      status: "success",
      message: "OTP verification successful",
    });
  } catch (error) {
    console.log("Error verifying OTP");
    res.status(500).json({
      status: "fail",
      error: "Internal server error",
    });
  }
};
