import "./Main.scss";
import TaskTab from "../../Components/TaskTab/TaskTab";
import TaskInput from "../../Components/TaskInput/TaskInput";
import { useState } from "react";
import Header from "../Header/Header";

const Main = () => {
  const [tasksArr, setTasksArr] = useState([]);
  const [newTask, setNewTask] = useState("");

  // same structure as object above
  //   const addNewTask = ({ task }) => {
  //     const newTask = { name: { task }, id: "task-1" };
  //     setTasksArr([newTask]);
  //   };

  const addNewTaskToArr = () => {
    setTasksArr([...tasksArr, setNewTask]);
  };

  const handleTaskInput = (event) => {
    const taskInput = event.target.value;
    setNewTask(taskInput);
  };

  //   const handleSubmit = (event, props) => {
  //     const { addTask } = props;
  //     event.preventDefault();
  //     addTask(addNewTaskToArr);
  //     setNewTask("");
  //     if (newTask === "") {
  //       alert("please enter a task");
  //     }
  //   };

  const handleResetButton = () => {
    setTasksArr([]);
    setNewTask("");
  };
  console.log(newTask);
  console.log(tasksArr);

  return (
    <div>
      <Header handleResetButton={handleResetButton} />
      <TaskInput taskInput={handleTaskInput} addTask={addNewTaskToArr} />
      <TaskTab taskArr={tasksArr} />
    </div>
  );
};
export default Main;
