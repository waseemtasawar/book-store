const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

const userRouter = require("./routes/userRoutes");

const indexPage = (req, res) => {
  res.status(200).json({
    message: "Hello from server",
    app: "Book Srote",
  });
};

app.get("/", indexPage);

app.use("/api/users", userRouter);

module.exports = app;
