const jwt = require('jsonwebtoken')
const User = require('../Model/Users')

const createtoken = (id)=>{
    return jwt.sign({id},process.env.private_key,{expiresIn: 300000});
}


const register = async(req,res)=>{

    try{
value={
    name:'roshan 2',
    email:'sd@gmail.com',
    password:'kdj',
    role:'user',
    phone:'95'
}

// Form validation


// Check the execting user
const user = await User.findOne({ where: { email: value.email } });
if (user == null){

// Register the new user
    let data = await User.create(value)        
    res.json({data:"Registered sucessfully", id:data.id})
}
else{
    res.json({data:"Email already exist"})
}       
    }
    catch{
    res.json({data:"Registration Fail"})
      
    }   
}


const login = async (req,res)=>{
    try{
    // Receiving the value
value ={
    email: "djf@gmail.com",
    password: "kdj"
}

//Validation



const check = await User.findOne({where: { email: value.email, password: value.password}});
if(check){
    const token = createtoken(check.id);
    res.json({id: check.id, token: token})
}
else{
    res.send("Not found")
}
    }
    catch{
        console.log("Error in login")
    }
}

const select = async(req,res)=>{
    try{
    const user_id = 6;

    // Getting the user value
    const select = await User.findByPk(user_id);
    if(select){
        res.json({data: select})
        console.log(select.id) 
    }
}
catch{
    console.log("Error in getting the user data")
}
}


const edituser = async(req,res)=>{
try{
    user_id= 6;
    value={
        name:'edited',
        email:'sd@gmail.com',
        password:'kdj',
        role:'user',
        phone:'9343435'
    }

    // Update the data
    const update = await User.update(value, {
        where: { id: user_id }
    });
    if(update[0]==1){
    res.json({data: "changed"})
    }
}
catch{
    console.log("error");
}
}

const changepassword = async (req,res)=>{

    try{
   // user id from decoded token
//    useid_id = req.data.id;

    value={
        user_id: 6,
        oldpassword: 'bbb',
        newpassword:'aaa'
    }
// Get check the old password
    const user = await User.findByPk(value.user_id);
if(user.password != value.oldpassword){
    res.json({id: "password not matched"})
}

// update the new password
const change = await User.update({ password: value.newpassword },
      { where: { id: user.id } }
    );
if(change[0]==1){
res.json({data: "changed"})
}
    }

 catch{
        console.log("error");
    }

}

module.exports={
    register,
    login,
    select,
    edituser,
    changepassword,
}