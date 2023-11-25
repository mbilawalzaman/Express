const authController = require("../controllers/authController");
const router = require("express").Router();

router.get("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/signUp", authController.signUp);
router.get("/forgotPassword", authController.forgotPassword);
router.get("/resetPassword", authController.resetPassword);


module.exports = router;