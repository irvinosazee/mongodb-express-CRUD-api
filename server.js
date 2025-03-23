const express = require('express');
const Product = require('./models/product.model.js');
const { start } = require('./db.js');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
});

app.get('/api/products', async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
        console.log(products)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

start(app);  