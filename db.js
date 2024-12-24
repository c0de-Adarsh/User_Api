const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Mongo db connected succesfully')
})

db.on('error',()=>{
    console.log('Mongodb connection error')
})

db.on('disconnected', ()=>{
    console.log('mongodb disconnected successfully')
})

module.exports = db;