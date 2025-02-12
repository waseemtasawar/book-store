const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

const userRouter = require("./routes/userRoutes");
const otpRoutes = require("./routes/otpRoutes");

const indexPage = (req, res) => {
  res.status(200).json({
    message: "Hello from server",
    app: "Book Srote",
  });
};

app.get("/", indexPage);

app.use("/api/users", userRouter);
app.use("/api/otp", otpRoutes);
app;

module.exports = app;
