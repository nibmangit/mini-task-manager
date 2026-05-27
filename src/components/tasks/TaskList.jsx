import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="space-y-3">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}

export default TaskList;
