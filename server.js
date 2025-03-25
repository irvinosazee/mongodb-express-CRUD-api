const express = require('express');
const { start } = require('./db.js');
const productRoutes = require('./routes/product.route.js')

const app = express()
start(app);  
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Product routes routes
app.use('/api/p/', productRoutes)