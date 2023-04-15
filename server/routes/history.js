const router = require("express").Router();

const {getAllHistory,createHistory}=require("../controllers/historyController");


router.get('/',getAllHistory)
router.post('/create',createHistory)


module.exports = router;