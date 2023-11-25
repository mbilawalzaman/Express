const userController = require("../controllers/userController");
const router = require("express").Router();

router.get("/createUser", userController.createUser);
router.get("/getAllUser", userController.getAllUser);
router.get("/deleteUser", userController.deleteUser);
router.get("/blockUser", userController.blockUser);
router.get("/updateUser", userController.updateUser);

module.exports = router;
