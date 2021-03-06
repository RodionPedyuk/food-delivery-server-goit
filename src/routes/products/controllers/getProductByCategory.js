const Product = require("../productSchema");

const getProductByCategory = async (request, response) => {
  try {
    const stringCategory = Object.values(request.query)[0];
    const category = stringCategory.slice(1, stringCategory.length - 1);

    const products = await Product.find({ categories: { $in: category } });
    response.status(200).json({
      status: "success",
      products: products,
    });
  } catch (error) {
    response.status(404).json({
      status: "error",
      message: error.message,
      text: "no products",
    });
  }
};

module.exports = getProductByCategory;
