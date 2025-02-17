const express = require("express");
const router  = express.Router();
const userController  = require("../Controllers/userController")


// Logout Route
router.post('logout',userController.logout);

// Get User Profile Route
router.get('/userProfile',userController.getUserProfile);


// Edit User Profile
router.put('/editProfile',userController.editProfile);

// Change Passoword
router.put('/changePassword',userController.changePassword);

// Delete user account
router.delete('/delete',userController.deleteAccount);

module.exports = router;