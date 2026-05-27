import { useState } from "react";
import TaskInput from "./components/tasks/TaskInput";
import TaskList from "./components/tasks/TaskList";
import TaskFilter from "./components/tasks/TaskFilter";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Toggle task
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const editTask = (id, newTitle) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? { ...task, title: newTitle }
        : task
    )
  );
};

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Mini Task Manager
      </h1>
      <TaskFilter />
      <TaskInput addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
