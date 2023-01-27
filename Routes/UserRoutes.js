const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// controller
const userController = require("../Controllers/UserController");

router.get("/", userController.listUsers);

router.get("/:userId", userController.getUserDetails);

router.post(
    "/",
    [body("firstName").notEmpty(), body("email").notEmpty()],
    userController.addUser
);

router.put("/", [body("userId").notEmpty()], userController.updateUserDetails);

router.delete("/", [body("userId").notEmpty()], userController.deleteUser);
// router.post(
//     "/register",
//     [
//         body("firstName").notEmpty(),
//         body("email").isEmail(),
//         body("password").notEmpty(),
//     ],
//     userController.registerUser
// );

// router.post(
//     "/login",
//     [body("email").isEmail(), body("password").notEmpty()],
//     userController.loginUser
// );

// router.post(
//     "/refreshToken",
//     [body("refreshToken").notEmpty()],
//     userController.refreshToken
// );

module.exports = router;
