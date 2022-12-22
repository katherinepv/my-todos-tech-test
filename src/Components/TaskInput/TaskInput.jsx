import "./TaskInput.scss";
import { useState } from "react";

const TaskInput = ({ handleTaskInput, newTask, addNewTaskToArr }) => {
  return (
    <form className="task-input" onSubmit={addNewTaskToArr}>
      <input
        type="text"
        name="text"
        placeholder="Add task here..."
        value={newTask}
        onInput={handleTaskInput}
        task={newTask}
      />
      <button type="submit" onClick={addNewTaskToArr}>
        append task
      </button>
    </form>
  );
};

export default TaskInput;
