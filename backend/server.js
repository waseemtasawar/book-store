const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB is connected successfully");
  })
  .catch((error) => {
    console.log("DB is not connect", error);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listen on port ${port}...`);
});
