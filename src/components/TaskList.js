import React from "react";

function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
  );
function TaskList({ tasks, onTaskDelete }) {
  const taskList = tasks.map((task, index) => (
    <Task
      key={index}
      text={task.text}
      category={task.category}
      onTaskDelete={() => onTaskDelete(index)}
    />
  ));
  return <div className="tasks">{taskList}</div>;
}}

export default TaskList;