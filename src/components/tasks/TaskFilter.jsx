function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex justify-end gap-3 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          filter === "all"
            ? "bg-blue-500 text-white"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          filter === "active"
            ? "bg-blue-500 text-white"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          filter === "completed"
            ? "bg-blue-500 text-white"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;