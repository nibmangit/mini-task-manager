import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
}) {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center">
          No tasks yet
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;