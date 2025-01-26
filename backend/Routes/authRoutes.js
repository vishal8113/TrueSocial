const express = require("express")

const router = express.Router()

const authController= require("../Controllers/authController")

router.post("/register",authController.register)

router.post("/login",authController.login)

router.post('/generate',authController.otpController);

module.exports = router