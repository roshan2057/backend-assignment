const DataTypes = require('sequelize')
const db =require('../Model/Database')

   const User =db.define("users",{
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    role:DataTypes.STRING,
    phone:DataTypes.INTEGER,    
   });

   User.sync({force:false})
   .then(()=>{
       console.log("Syncing User table")
   })
   .catch(error=>{
       console.log(error)
   })


module.exports=User;
