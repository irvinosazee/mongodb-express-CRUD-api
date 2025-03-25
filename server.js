const express = require('express');
const { start } = require('./db.js');
const productRoutes = require('./routes/product.route.js')

const app = express()
start(app);

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to MongoDB CRUD API' })
})

// Product routes routes
app.use('/api/p/', productRoutes)