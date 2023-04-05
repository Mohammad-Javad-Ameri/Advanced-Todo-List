const router = require("express").Router()
const {login,logout} = require("../controllers/authController");
const authMiddleware = require("../middlewares/jwtAuth");

router.post("/login", login);
router.put("/logout", authMiddleware, logout);


module.exports = router;