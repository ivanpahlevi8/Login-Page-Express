const mongoose = require('mongoose');

const startDb = (url) => {
    mongoose.connect(
            url, { useNewUrlParser: true }
        )
        .then(() => {
            console.log('Connected to database');
        })
        .catch((err) => {
            console.log('The error : ', err);
        })

    setTimeout(() => {
        console.log('DB Status', mongoose.connection.readyState);
    })
}

module.exports = { startDb }