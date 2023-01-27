const express = require("express");
const router = express.Router();
const uploader = require("../Utils/FileUtils");
const { body } = require("express-validator");

// controller
const fileController = require("../Controllers/FileController");

router.get("/", uploader.single("file"), fileController.uploadFile);

module.exports = router;
