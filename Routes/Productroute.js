const express = require('express');
const {create, update, remove, info } = require('../Controller/Productcontroller');
const router = express.Router();


router.post('/add',create);
router.put('/update/:id',update);
router.delete('/delete/:id',remove)
router.get('/info',info)

module.exports=router;