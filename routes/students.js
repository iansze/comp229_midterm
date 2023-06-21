const express = require("express");
const Student = require("../models/student");
const router = express.Router();

// Fetch all students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Cannot retrieve students" });
  }
});

// Fetch a single student by id
router.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Cannot retrieve student" });
  }
});

// Add a new student
router.post("/students", async (req, res) => {
  const { name, age, major } = req.body;
  const newStudent = new Student({ name, age, major });
  try {
    const regStudent = await newStudent.save();
    res.json(regStudent);
  } catch (error) {
    res.status(500).json({ message: "Cannot create student" });
  }
});

//Update a student by id
router.put("/students/:id", async (req, res) => {
  const { name, age, major } = req.body;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, major },
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: "Cannot update student" });
  }
});

//Delete a student by id
router.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted", student: deletedStudent });
  } catch (error) {
    res.status(500).json({ message: "Cannot delete student" });
  }
});

module.exports = router;
