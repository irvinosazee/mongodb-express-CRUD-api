const express = require('express');
const { start } = require('./db.js');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


start(app); 