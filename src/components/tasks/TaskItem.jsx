import { useState } from "react";

function TaskItem({
  task,
  deleteTask,
  toggleTask,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);

  const handleEdit = () => {
    if (!editedText.trim()) return;

    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-800 p-3 rounded">
      {isEditing ? (
        <input
          className="bg-black text-white px-2 py-1 rounded flex-1 mr-2"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span
          className={
            task.completed
              ? "line-through text-gray-400"
              : ""
          }
        >
          {task.title}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="bg-green-500 px-2 py-1 rounded"
        >
          ✓
        </button>

        {isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-blue-500 px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-white"
          >
            ✎
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 px-2 py-1 rounded"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TaskItem;