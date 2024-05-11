const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const controller = require("./src/controllers");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get("/get", controller.getProdutData);
app.post("/post", controller.postProductData);
