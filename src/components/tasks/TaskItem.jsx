function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-3 rounded">
      <span
        className={task.completed ? "line-through text-gray-400" : ""}
      >
        {task.title}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="bg-green-500 px-2 py-1 rounded"
        >
          ✓
        </button>

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