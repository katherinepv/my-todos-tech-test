import "./TaskTab.scss";

const TaskTab = ({ taskArr }) => {
  const taskTabsJSX = taskArr.map(({ name, id }) => (
    <div className="task-tab" key={id}>
      <input type="checkbox" name={name} id={id} />
      <label htmlFor="task-0">{name}</label>
      <button>delete</button>
    </div>
  ));
  return <div className="task-tabs">{taskTabsJSX}</div>;
};

export default TaskTab;
