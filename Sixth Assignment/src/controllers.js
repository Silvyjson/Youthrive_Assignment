const ProductModel = require("./model");

const getProductInventory = async (req, res) => {
  try {
    const productInventory = await ProductModel.find();

    if (productInventory.length > 0) {
      res.status(200).json(productInventory);
    } else {
      res.status(400).json({ message: "no items available" });
    }
  } catch (error) {
    console.log(error);
  }
};

const postProductInventory = async (req, res) => {
  const { name, brand, description, price, quantity } = req.body;

  try {
    if (!name || !brand || !description || !price || !quantity) {
      res.status(400).json({ message: "missing required fields" });
    }

    const newProductInventory = new ProductModel({
      name,
      brand,
      description,
      price,
      quantity,
    });

    await newProductInventory.save();

    return res.status(200).json(newProductInventory);
  } catch (error) {
    console.log(error);
  }
};

const updateProductInventory = async (req, res) => {
  const { id } = req.params;

  const { name, brand, description, price, quantity } = req.body;
  try {
    const updatePIRequest = await ProductModel.findByIdAndUpdate(
      id,
      { name, brand, description, price, quantity },
      { new: true }
    );

    if (updatePIRequest) {
      res.status(200).json({
        message: "Product updated successfully",
        updatePIRequest,
      });
    } else {
      res.status(400).json({ message: "Product update failed" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteProductInventory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletePIRequest = await ProductModel.findByIdAndDelete(id);

    if (deletePIRequest) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(400).json({ message: "Product deletion failed" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProductInventory,
  postProductInventory,
  updateProductInventory,
  deleteProductInventory,
};
