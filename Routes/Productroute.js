const express = require('express');
const auth = require('../Middleware/Auth');
const router = express.Router();


router.get('/add',auth)

module.exports=router;