const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
    try {
        await mongoose.connect(process.env.URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Could not connect to MongoDB', err);
        process.exit(1);
    }
}

module.exports = {
    dbConnect
};
