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
    res.send("Server is running, Database may not work Kindly follow steps written inside the DOCS.md (https://github.com/roshan2057/backend-assignment)   Thank You!!!!!!")
})

app.get('*', (req, res) => {
    res.send("Invalid API")
})

app.listen(process.env.port, () => {
    console.log("server is running at port " + process.env.port)
})