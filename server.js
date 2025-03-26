const express = require('express');
const { dbConnect } = require('./db.js');
const productRoutes = require('./routes/product.route.js')
const userRoutes = require('./routes/user.route.js')

const app = express()
dbConnect(app);

// Middleware setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Base route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to MongoDB CRUD API' })
})

// Product routes
app.use('/api/p/', productRoutes)

// User routes
app.use('/api/u/', userRoutes)
