const express = require('express');
const { daysales, weeksales, monthlysales, topselling } = require('../Controller/Reportcontroller');
const router = express.Router();

router.get('/today', daysales)
router.get('/weekly', weeksales)
router.get('/monthly', monthlysales)
router.get('/topselling', topselling)


module.exports = router;