const express = require("express");
const router = express.Router();
const Students = require("../Models/Students");

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newData = await Students.create(data);
    console.log(newData);
    res.send(201).json(newData);
  } catch (err) {
    console.log(err);
    res.send(500).json({ msg: "Internal Error" });
  }
});

router.get("/", async (req, res) => {
  const data = await Students.find({});
  res.json(data);
});

module.exports = router;
