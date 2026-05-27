function TaskFilter() {
  return (
    <div className="flex justify-end gap-3 mb-6">
      <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
        All
      </button>

      <button className="px-4 py-2 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition">
        Active
      </button>

      <button className="px-4 py-2 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition">
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;