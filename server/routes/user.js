const router = require("express").Router()
const {getAllUsers,getUser,createUser,updateUser,deleteUser }=require("../controllers/usercontroller")

router.get("/",getAllUsers)
router.post("/",createUser)
router.get("/:id",getUser)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)

module.exports=router;