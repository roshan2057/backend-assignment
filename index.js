const express = require("express")
//for getting json data
const bodyparser = require('body-parser')
const app = express();
const db = require('./Model/Database')
const userroute = require('./Routes/Userroute')
const productroute = require('./Routes/Productroute')
const orderroute = require('./Routes/Orderroute')
const reportroute = require('./Routes/Reportroute')

app.use(bodyparser.json())
// for using .env file
require('dotenv').config()


// checking database connectivity
db.authenticate().then(() => {
    console.log("database connected")
})
    .catch((error) => {
        console.log("Database error" + error)
    })


app.use('/API/user', userroute)
app.use('/API/product', productroute)
app.use('/API/order', orderroute)
app.use('/API/report', reportroute)

app.get('/', (req, res) => {
    res.send("server is running")
})

app.get('*', (req, res) => {
    res.send("Invalid API")
})

app.listen(process.env.port, () => {
    console.log("server is running at port " + process.env.port)
})