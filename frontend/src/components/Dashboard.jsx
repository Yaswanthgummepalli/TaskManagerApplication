import { useEffect, useState } from "react";

import api from "../services/api";

import Navbar from "./Navbar";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function Dashboard({ onLogout }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const fetchTasks = async () => {
        try {
            const response = await api.get("/tasks");

            setTasks(response.data);
        } catch (error) {
            console.error(error);

            if (error.response?.status === 401) {
                onLogout();
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const createTask = async (taskData) => {
        try {
            const response = await api.post(
                "/tasks",
                taskData
            );

            setTasks((previousTasks) => [
                ...previousTasks,
                response.data.task
            ]);

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Failed to create task"
            );
        }
    };

    const updateTask = async (id, taskData) => {
        try {
            const response = await api.put(
                `/tasks/${id}`,
                taskData
            );

            setTasks((previousTasks) =>
                previousTasks.map((task) =>
                    task._id === id
                        ? response.data.task
                        : task
                )
            );

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Failed to update task"
            );
        }
    };

    const deleteTask = async (id) => {
        try {
            await api.delete(`/tasks/${id}`);

            setTasks((previousTasks) =>
                previousTasks.filter(
                    (task) => task._id !== id
                )
            );

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Failed to delete task"
            );
        }
    };

    return (
        <div>
            <Navbar
                user={user}
                onLogout={onLogout}
            />

            <main className="dashboard">
                <h1>My Tasks</h1>

                <TaskForm
                    onTaskCreated={createTask}
                />

                {loading ? (
                    <p>Loading tasks...</p>
                ) : tasks.length === 0 ? (
                    <p>No tasks yet. Create your first task.</p>
                ) : (
                    <div className="task-list">
                        {tasks.map((task) => (
                            <TaskItem
                                key={task._id}
                                task={task}
                                onDelete={deleteTask}
                                onUpdate={updateTask}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default Dashboard;