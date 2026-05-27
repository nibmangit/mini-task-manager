function TaskItem() {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-3 rounded">
      <span>Sample Task</span>

      <div className="flex gap-2">
        <button className="bg-green-500 px-2 py-1 rounded">
          ✓
        </button>

        <button className="bg-red-500 px-2 py-1 rounded">
          ✕
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
