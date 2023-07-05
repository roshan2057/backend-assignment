const express = require('express');
const auth = require('../Middleware/Auth');
const { register, login, select, changepassword, edituser } = require('../Controller/Usercontroller');
const router = express.Router();


router.get('/register',auth,register)
router.get('/login',auth,login)
router.get('/select',auth,select)
router.get('/changepassword',auth,changepassword)
router.get('/update',auth,edituser)

module.exports=router;