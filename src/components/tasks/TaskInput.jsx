function TaskInput() {
  return (
    <div className="flex gap-2 mb-6">
      <input
        className="flex-1 p-2 rounded text-black"
        placeholder="Enter a task..."
      />

      <button className="bg-blue-500 px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
}

export default TaskInput;
