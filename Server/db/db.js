const mongoose = require('mongoose');
require('dotenv').config();


const db = async() =>{
    try{
        mongoose.connect(process.env.CONN_STR);
    }
    catch(err){
        console.error(err);
    }
}

module.exports = db;