const products = require("./products");

const getProdutData = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (products.length > 0) {
    res.status(200).json(products);
  } else {
    res.status(404).json({
      message: "No products found",
    });
  }
};

const postProductData = async (req, res) => {
  const {name, brand, color, price} = req.body;
  if(!name || !brand || !color || !price) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  products.push({name, brand, color, price});
  return res.status(200).json(products)
};

module.exports = {
  getProdutData,
  postProductData
};
