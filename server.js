const express = require('express');
const Product = require('./models/product.model.js');
const { start } = require('./db.js');

const app = express()
start(app);  
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Create a product
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
});

// Get all products
app.get('/api/products', async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
        // console.log(products)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

// Get a product by id
app.get('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

// Update a product
app.put('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const productUpdate = await Product.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
        if (!productUpdate){
            return res.status(404).json({message : 'Product not found'})
        }
        res.status(200).json(productUpdate)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Delete a product
app.delete('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const productDelete = await Product.findByIdAndDelete(id);
        if (!productDelete){
            return res.status(404).json({message : 'Product not found'})
        }
        res.status(200).json({message : `Product with ID:${id} was deleted successfully `})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})