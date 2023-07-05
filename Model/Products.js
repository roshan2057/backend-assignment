const DataTypes = require('sequelize')
const db = require('../Model/Database')

const Product = db.define("products", {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING(300),
    price: DataTypes.INTEGER,
});




module.exports = Product;
