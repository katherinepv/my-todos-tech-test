import "./App.scss";
import TaskTab from "./Components/TaskTab/TaskTab";
import TaskInput from "./Components/TaskInput/TaskInput";

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <button>reset</button>
      <TaskInput />
      <TaskTab name="eat" />
      <TaskTab name="sleep" />
      <TaskTab name="study" />
      <TaskTab name="go for walk" />
    </div>
  );
};

export default App;
