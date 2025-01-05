const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts); // Fetch all products
router.get('/:id', getProductById); // Fetch product by ID
router.post('/', createProduct); // Add a new product
router.put('/:id', updateProduct); // Update a product
router.delete('/:id', deleteProduct); // Delete a product

module.exports = router;
