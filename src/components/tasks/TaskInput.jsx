import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        className="flex-1 p-2 rounded text-black"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="bg-blue-500 px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}

export default TaskInput;
