const Order = require("../Model/Orders");
// importing for getting top selling products
const { Sequelize, sequelize, literal, Op } = require('sequelize')



const daysales = async (req, res) => {
  try {

    // split is used to seprate the time from the format 
    // 2000-11-11T00:00:00.000Z converts as '2023-07-04'
    const today = new Date().toISOString().split('T')[0];


    //checking for other day
    // const today ='2023-07-09'

    //The literal is used to pass a raw SQL expression
    // DATE(createdAt) = '${today}' extracts the date part from the createdAt column and compares it with todaydate.
    const data = await Order.findAll({
      where: literal(`DATE(createdAt) = '${today}'`),
    });

    if (data.length > 0) {
      res.json({ data: data })
    }
    else {
      res.json({ data: "NO data" })

    }

  }
  catch {
    console.log("Error in getting data")
  }
}

const weeksales = async (req, res) => {
  try {
    const today = new Date();
    // subtracting 7 days from today
    const startday = new Date(today.setDate(today.getDate() - 7)).toISOString().split('T')[0];
    const endday = new Date().toISOString().split('T')[0];


    //The literal is used to pass a raw SQL expression
    // DATE(createdAt) = '${today}' extracts the date part from the createdAt column and compares it with todaydate.
    const data = await Order.findAll({
      where: literal(`DATE(createdAt) BETWEEN '${startday}' AND '${endday}'`),
    });

    if (data.length > 0) {
      res.json({ data: data })
    }
    else {
      res.json({ data: "NO data" })

    }
  }
  catch {
    console.log("error in getring data")
  }
}



const monthlysales = async (req, res) => {
  try {
    const today = new Date();
    // subtracting 7 days from today
    const startday = new Date(today.setDate(today.getDate() - 30)).toISOString().split('T')[0];
    const endday = new Date().toISOString().split('T')[0];


    //The literal is used to pass a raw SQL expression
    // DATE(createdAt) = '${today}' extracts the date part from the createdAt column and compares it with todaydate.
    const data = await Order.findAll({
      where: literal(`DATE(createdAt) BETWEEN '${startday}' AND '${endday}'`),
    });

    if (data.length > 0) {
      res.json({ data: data })
    }
    else {
      res.json({ data: "NO data" })

    }
  }
  catch {
    console.log("error in getring data")
  }
}


// Note the number of time interval report can be when
// user gives the certain date i.e just subtracting from today 
// One function can get all the report upto given date..


const topselling = async (req, res) => {
  try {

    // Documentaion https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#specifying-attributes-for-select-queries
    const data = await Order.findAll({
      attributes: ['productId', [Sequelize.fn('SUM', Sequelize.col('quantity')), 'totalQuantity']],
      group: ['productId'],
      order: [[Sequelize.fn('SUM', Sequelize.col('quantity')), 'DESC']],
      limit: 10
    })


    if (data.length > 0) {
      res.json({ data: data })
    }
    else {
      res.json({ data: "Empty no data" })
    }
  }
  catch {
    console.log("Error in getting top selling products")
  }
}


module.exports = {
  daysales,
  weeksales,
  monthlysales,
  topselling
}