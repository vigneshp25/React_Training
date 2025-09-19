import CreateTask from "./components/createTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <main>
        <h1>Todo App With Redux</h1>
      </main>
      <section>
        <CreateTask />
        <TaskList/>
      </section>
    </>
  );
}

export default App;
