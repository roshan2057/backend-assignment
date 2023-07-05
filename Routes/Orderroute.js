const express = require('express');
const { create, update, remove, orderinfo } = require('../Controller/Ordercontroller');
const router = express.Router();


router.post('/add',create);
router.put('/update/:id',update);
router.delete('/delete/:id',remove);
router.get('/info/:id',orderinfo)


module.exports=router;