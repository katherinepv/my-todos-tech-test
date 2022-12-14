import "./App.scss";
import TaskTab from "./Components/TaskTab/TaskTab";
import TaskInput from "./Components/TaskInput/TaskInput";
import { useState } from "react";

const App = () => {
  // const [tasksArr, setTasksArr] = useState({ tasksArr });
  let taskArr = [
    { name: "eat", id: "task-1" },
    { name: "sleep", id: "task-2" },
    { name: "walk", id: "task-3" },
    { name: "cook", id: "task-4" },
  ];

  // same structure as object above
  const addTask = ({ task }) => {
    const newTask = { name: { task }, id: "task-1" };
    setTasksArr([newTask]);
  };
  return (
    <div>
      <h1>My Todos</h1>
      <button>reset</button>
      <TaskInput addTask={addTask} />
      <TaskTab taskArr={taskArr} />
    </div>
  );
};

export default App;
