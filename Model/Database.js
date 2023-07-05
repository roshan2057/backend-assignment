const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()




module.exports = new Sequelize(process.env.database_name, process.env.user, process.env.password, {
    host: process.env.host,
    dialect: 'mysql',
    pool: { max: 5, min: 0, idel: 10000 }
});


