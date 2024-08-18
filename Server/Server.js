const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db/db');
const UsersRoute = require('./routes/Users');
const cookiesParser = require("cookie-parser");
const MessageRoute = require('./routes/Messages');
const AllUsersRoute = require("./routes/allUser");

const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cookiesParser()); // use cookiesParser as middleware

app.use('/api/Auth', UsersRoute);
app.use('/api/Msg', MessageRoute);
app.use('/api/Users', AllUsersRoute);

app.listen(PORT, () => {
    db().then(() => console.log('Mongodb is connected...'));
    console.log(`listening on port: ${PORT}...`);
});