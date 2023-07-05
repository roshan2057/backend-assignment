const DataTypes = require('sequelize')
const db = require('../Model/Database')

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


Order.sync({ force: false })
    .then(() => {
        console.log("Syncin ORder Table")
    })
    .catch(error => {
        console.log(error)
    })

const Product = require('./Products')
const User = require('./Users')

Order.belongsTo(Product, { foreignKey: 'productId' });
Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = Order;
