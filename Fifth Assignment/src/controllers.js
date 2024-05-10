const students = require("./students");
const users = require("./users");

const usersData = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (students.length > 0) {
    res.status(200).json(students);
  } else {
    res.status(404).json({
      message: "No students found",
    });
  }
};

const postData = async (req, res) => {
  const {firstName, lastName, email, gender} = req.body;
  if(!firstName || !lastName|| !email || !gender) {
    res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  users.push({firstName, lastName, email, gender});
  return res.status(200).json({message: "Registration successful!", users})
};

module.exports = {
  usersData,postData
};
