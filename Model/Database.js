const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()




module.exports = new Sequelize(process.env.database_name, process.env.user, process.env.password, {
    host: process.env.host,
    dialect: 'mysql',
    pool: { max: 5, min: 0, idel: 10000 }
});


// Creating the table if not exists
const Product = require('./Products')
const User = require('./Users')
const Order = require('./Orders')


//async because the order table is not created in first place
async function sync() {


    await User.sync({ force: false })
        .then(() => {
            console.log("Syncing User table")
        })
        .catch(error => {
            console.log(error)
        })


    await Product.sync({ force: false })
        .then(() => {
            console.log("Syncing Product Table")
        })
        .catch(error => {
            console.log(error)
        })


    await Order.sync({ force: false })
        .then(() => {
            console.log("Syncing ORder Table")
        })
        .catch(error => {
            console.log(error)
        })
}

sync();