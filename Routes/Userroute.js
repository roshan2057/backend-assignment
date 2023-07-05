const express = require('express');
const auth = require('../Middleware/Auth');
const { register, login, select, changepassword, edituser } = require('../Controller/Usercontroller');
const router = express.Router();

// As authentication (auth) middleware is used which verify the incomming token 
router.post('/register', register)
router.post('/login', login)
router.get('/select', auth, select)
router.post('/changepassword', auth, changepassword)
router.put('/update', auth, edituser)

module.exports = router;