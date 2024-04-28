const express = require("express");
const dotenv = require("dotenv").config();
// const students = require("./src/students");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Welcome to my first Node.js server. APIs available:
  <a href="/strings">Strings API</a>,
  <a href="/objects">Objects API</a>,
  <a href="/arrays">Array API</a>`);
});

app.get("/strings", (req, res) => {
  res.json(" my name is Mbadugha Silvia");
});

app.get("/objects", (req, res) => {
  res.json({name: "ada", age: 28, job: "backend developer"});
});

app.get("/arrays", (req, res) => {
  res.json([
    { name: "precious", age: 23, job: "web designer" },
    { name: "david", age: 27, job: "UI/UX designer" },
    { name: "oscar", age: 28, job: "product manager" }
  ]);
});
