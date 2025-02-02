const express = require("express");
const app = express();

app.use(express.json());
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
