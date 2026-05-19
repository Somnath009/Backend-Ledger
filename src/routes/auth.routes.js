const express = require("express");
const authController = require("../controller/auth.controller");

const router = express.Router();

/**
 * @desc User Registration Route
 * @route POST /api/auth/register
 */
router.post("/register", authController.userRegisterController);

/**
 * @desc User Login Route
 * @route POST /api/auth/Login
 */
router.post("/login", authController.userLoginController)

module.exports = router;
