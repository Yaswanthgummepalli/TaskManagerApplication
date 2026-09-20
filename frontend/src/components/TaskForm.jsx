import { useState } from "react";

function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        await onTaskCreated({
            title,
            description
        });

        setTitle("");
        setDescription("");
    };

    return (
        <form
            className="task-form"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;