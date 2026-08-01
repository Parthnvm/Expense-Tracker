const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
// import { register } from "../controllers/auth.controller.js";

const {
    registerUser,
    loginUser,
    getUserInfo,
    uploadImage,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), uploadImage);

module.exports = router;