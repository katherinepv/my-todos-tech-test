import "./TaskInput.scss";
import { useState } from "react";

const TaskInput = () => {
  const [task, setTask] = useState("");

  const handleInput = (event) => {
    const taskInput = event.target.value;
    setTask(taskInput);
  };

  const handleSubmit = (event, props) => {
    const { addTask } = props;
    event.preventDefault();
    addTask(task);
    setTask("");
    if (task === "") {
      alert("please enter a task");
    }
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Add task here..."
        value={task}
        onInput={handleInput}
        task={task}
      />
      <button type="submit">append task</button>
    </form>
  );
};

export default TaskInput;
