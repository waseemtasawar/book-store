const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listen on port ${port}...`);
});
