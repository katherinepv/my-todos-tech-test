import "./TaskInput.scss";
import { useState } from "react";

const TaskInput = () => {
  const [task, setTask] = useState("");

  const handleInput = (event) => {
    const taskInput = event.target.value;
    setTask(taskInput);
  };

  return (
    <form className="task-input">
      <input
        type="text"
        placeholder="Add task here..."
        onInput={handleInput}
        task={task}
      />
      <button type="submit">append task</button>
    </form>
  );
};

export default TaskInput;
