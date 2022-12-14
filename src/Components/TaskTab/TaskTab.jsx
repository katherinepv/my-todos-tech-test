import "./TaskTab.scss";

const TaskTab = ({ name }) => {
  return (
    <div className="task-tab">
      <input type="checkbox" name="task-0" id="task-0" />
      <label htmlFor="task-0">{name}</label>
      <button>delete</button>
    </div>
  );
};

export default TaskTab;
