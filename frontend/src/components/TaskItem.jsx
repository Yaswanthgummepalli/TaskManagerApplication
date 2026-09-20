import { useState } from "react";

function TaskItem({
    task,
    onDelete,
    onUpdate
}) {
    const [editing, setEditing] = useState(false);

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(
        task.description
    );

    const handleUpdate = async () => {
        await onUpdate(task._id, {
            title,
            description
        });

        setEditing(false);
    };

    const toggleCompleted = async () => {
        await onUpdate(task._id, {
            completed: !task.completed
        });
    };

    return (
        <div className="task-card">

            {editing ? (
                <>
                    <input
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />

                    <textarea
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                    />

                    <button onClick={handleUpdate}>
                        Save
                    </button>

                    <button
                        onClick={() => setEditing(false)}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <h3 className={task.completed ? "completed" : ""}>
                        {task.title}
                    </h3>

                    <p>{task.description}</p>

                    <p>
                        Status:
                        {task.completed
                            ? " Completed"
                            : " Pending"}
                    </p>

                    <button onClick={toggleCompleted}>
                        {task.completed
                            ? "Mark Pending"
                            : "Complete"}
                    </button>

                    <button
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(task._id)}
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}

export default TaskItem;