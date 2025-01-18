const User= require("../Models/authModel");
const bcrypt= require("bcrypt");
// User Registration Controller
exports.register = async (req,res,next) => {
    try{
        const {email,password}=req.body;
        const hash = await bcrypt.hash(password,12);
        const user = await User.create({email,password:hash});
        if(!user)
        {
         return res.status(503).json({
            status:"error",
           message:"Registration Failed",
          })
        }
        return res.status(200).json({
            status:"success",
            message:"Registration Successful"
        })

    }
    catch(err)
    {
        console.log(err);
        res.status(502).json({
            message:err
        })
    }
}

// User Login Controller
exports.login = async (req,res,next) => {
    // Write Code..
}