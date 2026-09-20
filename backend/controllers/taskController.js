const taskService = require("../services/taskService");

const createTask = async (req, res) => {

    try {

        const task = await taskService.createTask(req.body,req.user.userId);

        res.status(201).json({
            message: "Task created successfully",
            task: task
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const getTasks = async (req, res) => {

    try {

        const tasks = await taskService.getTasks(req.user.userId);

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const getTaskById = async (req, res) => {

    try {

        const task = await taskService.getTaskById(req.params.id,req.user.userId);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {

        res.status(500).json({
            message: "Invalid task id"
        });
    }
};

const updateTask = async (req, res) => {

    try {

        const task = await taskService.updateTask(
            req.params.id,
            req.body,
            req.user.userId
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task updated successfully",
            task: task
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const deleteTask = async (req, res) => {

    try {

        const task = await taskService.deleteTask(req.params.id,req.user.userId);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};