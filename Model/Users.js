const DataTypes = require('sequelize')
const db = require('../Model/Database')

const User = db.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    phone: DataTypes.STRING(10),
});





module.exports = User;
