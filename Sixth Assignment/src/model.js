const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  brand: { type: "String", required: true },
  description: { type: "String", required: true },
  price: { type: "Number", required: true },
  quantity: { type: "Number", required: true },
});

const ProductModel = new mongoose.model("Product Inventory", productSchema);

module.exports = ProductModel;
