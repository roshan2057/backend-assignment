const express = require ("express")
const bodyparser = require('body-parser')
const app = express();
const db =require('./Model/Database')
const userroute = require('./Routes/Userroute')
const productroute = require('./Routes/Productroute')

app.use(bodyparser.json())
require('dotenv').config()


// checking database connectivity
db.authenticate().then(()=>{
    console.log("database connected")
})


app.use('/API/user',userroute)
app.use('/API/product',productroute)

app.get('/',(req,res)=>{
   res.send("server running")
})

app.get('*',(req,res)=>{
res.send("Invalid API")
})

app.listen(8000,()=>{
console.log("server at 8000")
})