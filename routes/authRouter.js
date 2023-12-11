const authController = require("../controllers/authController");
const router = require("express").Router();
const { auth } = require("../middleware");

router.post("/login", auth, authController.login);
router.post("/logout", authController.logout);
router.post("/signUp", authController.signUp);
router.get("/forgotPassword", authController.forgotPassword);
router.get("/resetPassword", authController.resetPassword);


module.exports = router;