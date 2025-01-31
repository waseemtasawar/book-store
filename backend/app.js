const express = require("express");
const app = express();

app.use(express.json());

const indexPage = (req, res) => {
  res.status(200).json({
    message: "Hello from server",
    app: "Book Srote",
  });
};

app.get("/", indexPage);

module.exports = app;
