import "./App.scss";
import TaskTab from "./Components/TaskTab/TaskTab";
import TaskInput from "./Components/TaskInput/TaskInput";

const App = () => {
  let taskArr = [
    { name: "eat", id: "task-1" },
    { name: "sleep", id: "task-2" },
    { name: "walk", id: "task-3" },
  ];
  return (
    <div>
      <h1>My Todos</h1>
      <button>reset</button>
      <TaskInput />
      <TaskTab taskArr={taskArr} name="eat" />
    </div>
  );
};

export default App;
