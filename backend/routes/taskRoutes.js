const express=require("express")

const protect=require('../middlewares/authMiddleware')

const router=express.Router();

const taskController=require("../controllers/taskController");

const {validateCreateTask,validateUpdateTask}=require("../validators/taskValidator")

router.post('/',protect,validateCreateTask,taskController.createTask);

router.get("/", protect,taskController.getTasks);

router.get("/:id", protect,taskController.getTaskById);

router.put("/:id", protect,validateUpdateTask,taskController.updateTask);

router.delete("/:id", protect,taskController.deleteTask);

module.exports=router;

