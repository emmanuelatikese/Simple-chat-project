const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db/db');
const UsersRoute = require('./routes/Users');

const PORT = process.env.PORT || 5001;
app.use(express.json());

app.use('/api/UserAuth', UsersRoute);

app.listen(PORT, () => {
    db().then(() => console.log('Mongodb is connected...'));
    console.log(`listening on port: ${PORT}...`);
})