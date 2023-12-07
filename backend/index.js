const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config();

// Routes
const Student = require("./Routes/Student");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Routes
app.use("/", Student);

app.listen(port, () => {
  console.log("Server Started");
  mongoose
    .connect(process.env.MongoURL)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
