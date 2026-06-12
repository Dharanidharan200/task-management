import React from "react";

function TaskList({ tasks, deleteTask }) {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="empty-message">
        No tasks available.
      </p>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li
          key={`${task.id}-${index}`}
          className="task-item"
        >
          <span>{task.title}</span>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;