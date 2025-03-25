const express = require('express');
const ProductController = require('../controllers/product.controller');
const router = express.Router()

// Destruction of the ProductController
const { createProduct, getAllProducts, getProductById, updateAProduct, DeleteAProduct} = ProductController

// Create a product
router.post('/products', createProduct);

// Get all products
router.get('/products', getAllProducts);

// Get a product by id
router.get('/product/:id',getProductById) 

// Update a product
router.put('/product/:id', updateAProduct)

// Delete a product
router.delete('/product/:id', DeleteAProduct)

module.exports = router