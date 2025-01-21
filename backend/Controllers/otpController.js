const generateOtp = ()=>
{
    return Math.floor(100000 + Math.random() * 900000);
    //This will generate random  6 digit otp
}

const otpController ={
    sendOTP: async(req,res)=>{
        try{
            const {email} = req.body; //sending email from body
            
            const otp=generateOtp(); //Now we are generating otp
            res.status(200).json({
                success:true,
                message:"OTP Generated Successfully",
                otp: otp
            });
        }
        catch(err)
        {
          console.log("OTP Generation Error",err);
          res.status(501).json({
            success:false,
            message:"Failed to generate otp"
          })
        }
    }
};

module.exports = otpController;