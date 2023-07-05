const DataTypes = require('sequelize')
const db = require('../Model/Database')

const Product = require('./Products')
const User = require('./Users')

const Order = db.define("orders", {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
});






// Relationship Between Order table and Product table .ie One to many
Order.belongsTo(Product, { foreignKey: 'productId' });


// Relationship Betweeen Order table and User tabele it is also one to many
Order.belongsTo(User, { foreignKey: 'userId' });



module.exports = Order;
