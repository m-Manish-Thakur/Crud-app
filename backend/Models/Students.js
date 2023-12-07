const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  student_name: String,
  course: String,
  year: String,
  fee: Number,
});

const Students = mongoose.model("Student", studentSchema);
module.exports = Students;
