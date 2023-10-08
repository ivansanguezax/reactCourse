import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import {task as data} from './task'
import {useState, useEffect} from 'react'

function App() {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(taskTitle) {
    setTask([...tasks,{
      id: tasks.length + 1,
      title: taskTitle,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam."
    }]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
