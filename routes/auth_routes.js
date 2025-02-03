const express = require("express");
const router = express.Router();
const {
    loginPage, 
    signupPage
} = require("../controller/auth_controller");

router.get("/login", loginPage);

router.get("/signup", signupPage);


module.exports = router