import React from "react";

function TaskForm({ title, setTitle, addTask }) {
  return (
    <form className="task-form" onSubmit={addTask}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;