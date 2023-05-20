const express = require('express');

const app = express();

const myDb = require('./database/db');

const route = require('./route/user_route');

const cors = require('cors');

app.use(cors())

app.use(express.json());

app.use(route);

require('dotenv').config()

const start = async() => {
    try {
        await myDb.startDb(process.env.DB_URI);
        app.listen(3030, () => {
            console.log('Server start and listen at localhost:2020');
        })
    } catch (err) {
        console.log(err);
    }
}

start();