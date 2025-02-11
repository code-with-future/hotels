const mongoose = require("mongoose");
require('dotenv').config();

// const mongoURl = process.env.MONGODB_URL_LOCAL;
const mongoURl = process.env.MONGODB_URL;

mongoose.connect(mongoURl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("database is connected");
})

db.on('error',()=>{
    console.log("database connection error");
})

db.on('disconnected',()=>{
    console.log("database is disconnected");
})

module.exports = db;