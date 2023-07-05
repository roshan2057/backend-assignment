const express = require('express');
const auth = require('../Middleware/Auth');
const { register, login, select, changepassword, edituser } = require('../Controller/Usercontroller');
const router = express.Router();


router.post('/register',auth,register)
router.post('/login',auth,login)
router.get('/select',auth,select)
router.post('/changepassword',auth,changepassword)
router.put('/update',auth,edituser)

module.exports=router;