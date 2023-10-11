import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { task as data } from "./data/task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        id: tasks.length + 1,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTask(newTasks);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deteleTask={deleteTask} />
    </>
  );
}

export default App;
