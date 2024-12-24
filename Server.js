const express = require('express')
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const routes = require('./Routes/userRoutes')

const PORT = 5000

app.use(bodyParser.json())
app.use(routes)
app.get('/',(req , res)=>{
    res.send('hello world')
})

app.listen(PORT,()=>{
    console.log(`this server is up and listing on ${PORT}`)
})