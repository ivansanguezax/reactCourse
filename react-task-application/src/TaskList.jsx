import {task as data} from './task'
import {useState, useEffect} from 'react'



function TaskList() {
  
    const [task, setTask] = useState([]);
    useEffect(() => {
        setTask(data);
        },[]);

    if (task.length === 0) {
     return <h1>No hay tareas</h1>
    }

    
  
    return (
    <div>
      {
        task.map((task) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList
