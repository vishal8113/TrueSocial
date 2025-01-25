const express=require("express");
const router= express.Router();

const otpController=require("../Controllers/otpController");
router.post('/generate',otpController.sendOTP);

module.exports = router;