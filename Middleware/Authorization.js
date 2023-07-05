

const User = require('../Model/Users');



const authorization = async (req, res, next) => {

    const id = req.data.id;
    const find = await User.findByPk(id)
    if (find.role == 'admin') {
        next();
    }
    else {
        return res.send("You are Unauthorized to access")
    }
}

module.exports = authorization;