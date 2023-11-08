const { Router } = require("express")
const { readTasks, createTask, updateTask, deleteTask } = require("../controllers/ToDoControllers")

const router = Router()

router.get('/', readTasks)
router.post('/create', createTask)
router.put('/update', updateTask)
router.delete('/delete', deleteTask)

module.exports = router