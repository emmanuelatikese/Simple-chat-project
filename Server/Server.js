const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db/db');



const PORT = process.env.PORT || 5001;



app.listen(PORT, () => {
    db().then(() => console.log('Mongodb is connected...'));
    console.log(`listening on port: ${PORT}...`);
})