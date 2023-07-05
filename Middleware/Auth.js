const jwt = require('jsonwebtoken')



const auth = (req,res, next)=>{

    // const token = req.headers.auth;
    // if(token){
    //     jwt.verify(token,process.env.private_key,(error,result)=>{
    //         if(error){
    //             return res.send("Token Invalid")
    //         }
    //         else{
    //             const data = jwt.decode(token)
    //             req.data=data;
    //             next();
    //         }
    //     })
    // }
    // else{
    //     return res.send("No Token")
    // }


    console.log("auth")
    next();
}

module.exports=auth;
