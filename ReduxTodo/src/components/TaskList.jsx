import { useSelector, useDispatch } from "react-redux";
import { taskAction } from "../store/taskSlice";

function TaskList() {
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  function handleComplete(id) {
    dispatch(taskAction.toggleCompleted({ id: id }));
  }
  function handleDeleteTask(id) {
    dispatch(taskAction.removeTask({ id: id }));
  }
  return (
    <section>
      <ul className="tasklist">
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "300px",
                }}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleComplete(task.id)}
                />
                <span
                  className={`task-title ${task.completed ? "completed" : ""}`}
                >
                  {task.title}
                </span>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default TaskList;
