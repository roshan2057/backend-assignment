const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../Model/Users')

const createtoken = (id) => {
    return jwt.sign({ id }, process.env.private_key, { expiresIn: 300000 });
}


const register = async (req, res) => {

    try {
        value = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: 'user',
            phone: req.body.phone
        }

        // if your want you hash you password you can
        // const hash = await bcrypt.hash(value.password,10);

        // Form validation
        // check if the feild is empty
        if (Object.values(value).some(property => property === '')) {
            return res.json({ data: "All field required" })
        }
        // validateing phone number with regular expression
        if (!/^\d{10}$/.test(value.phone)) {
            return res.json({ data: "Phone number invalid" })
        }


        // Semae email id cannot register
        const user = await User.findOne({ where: { email: value.email } });
        if (user == null) {

            // Register the new user
            let data = await User.create(value)
            res.status(200).json({ data: "Registered sucessfully", id: data.id })
        }
        else {
            res.status(404).json({ data: "Email already exist" })
        }
    }
    catch {
        res.status(404).json({ data: "Registration Fail" })

    }
}


const login = async (req, res) => {
    try {
        // Receiving the value
        value = {
            email: req.body.email,
            password: req.body.password
        }

        //Validation
        if (Object.values(value).some(property => property === '')) {
            return res.json({ data: "All field required" })
        }

        // for hashed password compare 1st database password should retrive
        // const ismatched = await bcrypt.compare(inputpassword,databasepassword);

        const check = await User.findOne({ where: { email: value.email, password: value.password } });
        if (check) {
            // Generating the jwt webtoken
            const token = createtoken(check.id);
            // we can store token in cookies but here i just send it to client, the are responsible to store in cookies or in session
            // client should every time send the token in the http hearder in variable auth so the middleware can verify it
            res.status(200).json({ id: check.id, token: token })
        }
        else {
            res.status(404).send("Not found")
        }
    }
    catch {
        console.log("Error in login")
    }
}

const select = async (req, res) => {
    try {
        const user_id = req.data.id;

        // Getting the user value
        const select = await User.findByPk(user_id);
        if (select) {
            res.status(200).json({ data: select })
            console.log(select.id)
        }
    }
    catch {
        console.log("Error in getting the user data")
    }
}


const edituser = async (req, res) => {
    try {
        user_id = req.data.id;
        value = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            phone: req.body.phone
        }


        // Update the data
        const update = await User.update(value, {
            where: { id: user_id }
        });
        if (update) {
            res.status(200).json({ data: "changed" })
        }
        else {
            res.status(404).json({ data: "NOt edit" })
        }
    }
    catch {
        console.log("error");
    }
}

const changepassword = async (req, res) => {

    try {
        // user id from decoded token
        //    useid_id = req.data.id;

        value = {
            user_id: req.data.id,
            oldpassword: req.body.oldpassword,
            newpassword: req.body.newpassword
        }
        // Get check the old password
        const user = await User.findByPk(value.user_id);
        if (user.password != value.oldpassword) {
            return res.status(404).json({ id: "password not matched" })
        }

        // update the new password
        const change = await User.update({ password: value.newpassword },
            { where: { id: user.id } }
        );
        if (change[0] == 1) {
            res.status(200).json({ data: "changed" })
        }
    }

    catch {
        console.log("error");
    }

}

module.exports = {
    register,
    login,
    select,
    edituser,
    changepassword,
}