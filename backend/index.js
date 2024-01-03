const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Routes
const Student = require("./Routes/Student");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Routes
app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(8000, () => {
  console.log("Server Started");
  mongoose
    .connect("mongodb+srv://manishthakur231690:CrudApp231690@crud-app.8lq7npz.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
