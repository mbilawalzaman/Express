const userController = require("../controllers/userController");
const { trainee, instructor } = require("../middleware");
const router = require("express").Router();

router.post("/createUser",instructor, userController.createUser);
router.get("/getAllUsers", trainee, userController.getAllUser);
router.delete("/deleteUser", userController.deleteUser);
router.put("/updateUser", userController.updateUser);


module.exports = router;
