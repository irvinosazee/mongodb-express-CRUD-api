const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(`${process.env.URI}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));