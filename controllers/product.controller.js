const Product = require('../models/product.model.js');

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products)
        // console.log(products)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id);
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateAProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productUpdate = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!productUpdate) {
            return res.status(404).json({ message: 'Product not found' })
        }
        return res.status(200).json(productUpdate)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const DeleteAProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productDelete = await Product.findByIdAndDelete(id);
        if (!productDelete) {
            return res.status(404).json({ message: 'Product not found' })
        }
        return res.status(200).json({ message: `Product with ID:${id} was deleted successfully ` })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateAProduct,
    DeleteAProduct,
}