const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 3000;
async function start(app) {
    mongoose.connect(`${process.env.URI}`)
        .then(() => {
            console.log('Connected to MongoDB')
            app.listen(port, () => {
                console.log(`Server is running on Port ${port}`)
            })

        })
        .catch(err => {
            console.error('Could not connect to MongoDB', err)
            process.exit(1);
        });

}

module.exports = {
    start
}
