import TaskInput from "./components/tasks/TaskInput";
import TaskList from "./components/tasks/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Mini Task Manager
      </h1>

      <TaskInput />

      <TaskList />
    </div>
  );
}

export default App;
