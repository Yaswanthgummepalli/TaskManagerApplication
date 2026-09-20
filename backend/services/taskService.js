const Task = require("../models/Task");

const createTask = async (taskData,userId) => {
    const task = await Task.create({
        ...taskData,
        user:userId
    });

    return task;
};

const getTasks = async (userId) => {
    const tasks = await Task.find({user:userId});

    return tasks;
};

const getTaskById = async (taskId,userId) => {

    const task = await Task.findById({
        _id:taskId,
        user:userId
    });

    return task;
};

const updateTask = async (taskId, taskData,userId) => {

    const task = await Task.findByIdAndUpdate(
        {
            _id:taskId,
            user:userId
        },
        taskData,
        {
            new: true,
            runValidators: true
        }
    );

    return task;
};


const deleteTask = async (taskId,userId) => {

    const task = await Task.findByIdAndDelete({
        _id:taskId,
        user:userId
    });

    return task;
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};