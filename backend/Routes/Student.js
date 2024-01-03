const express = require("express");
const router = express.Router();
const Students = require("../Models/Students");

router.use(express.json());

router.post("/students", async (req, res) => {
  try {
    const data = req.body;
    const newData = await Students.create(data);
    console.log(newData);
    res.json(newData);
  } catch (err) {
    console.log(err);
    res.send(500).json({ msg: "Internal Error" });
  }
});
router.delete("/students/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    await Students.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    console.log(err);
  }
});

router.get("/students", async (req, res) => {
  try {
    const data = await Students.find({});
    res.json(data);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
