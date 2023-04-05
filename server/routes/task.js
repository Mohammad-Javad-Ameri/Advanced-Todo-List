const router = require("express").Router();
const { getAllTasks,getOneTask,createNewTask,deleteTask,updateTask}=require("../controllers/taskController")

router.get('/',getAllTasks)
router.post('/', createNewTask)
router.get('/:id', getOneTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)


module.exports = router