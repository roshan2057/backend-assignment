const express = require('express');
const { create, update, remove, info } = require('../Controller/Productcontroller');
const authorization = require('../Middleware/Authorization');
const auth = require('../Middleware/Auth');
const router = express.Router();


// auth is authentication and authorization only lets the user whose role is admin otherwise it will not go further

router.post('/add', auth, authorization, create);
router.put('/update/:id', auth, authorization, update);
router.delete('/delete/:id', auth, authorization, remove)
router.get('/info', info)

module.exports = router;