//Middleware check for register api
const JWT = require('jsonwebtoken')
const signUpValidate = (req,res,next)=>{
    const {name,username,email,password,bio}=req.body;
    if(req.body && name && email && password && username && bio){
        next();
    }else{
        res.status(400).json({
            success:false,
            message:"all inputs required"
        })
    }
}

//Middleware check for login Api
const loginValidate= (req,res,next)=>{
    const {email,password}=req.body;
    if(req.body && email && password){
        next();
    }else{
        res.status(400).json({
            success:false,
            message:"Invalid"
        })
    }
}

const authenticateUser =(req,res,next) =>{
    //verify the token
    const token = (req.cookies && req.cookies.token) || null;
    if (!token) {
        return res.status(400).json({
          success: false,
          message: "Not Authorized",
        });
      }
      try{
        const payload = JWT.verify(token,process.env.SECRET);
        req.user = {id: payload.id,username:payload.username,email:payload.email}
        next();

      }catch(err){
        res.status(400).json({
            success:false,
            message:"Invalid"
        })
      }

}

module.exports ={signUpValidate,loginValidate,authenticateUser}