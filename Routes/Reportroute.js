const express = require('express');
const { daysales, weeksales, monthlysales } = require('../Controller/Reportcontroller');
const router = express.Router();

router.get('/today',daysales)
router.get('/weekly',weeksales)
router.get('/monthly',monthlysales)


module.exports=router;