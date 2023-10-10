import PropTypes from 'prop-types';
import TaskCard from './TaskCard';

function TaskList({tasks}) {
  
    
    if (tasks.length === 0) {
     return <h1>No hay tareas</h1>
    }
    return (
    <div>
      {tasks.map((task) => (
          <TaskCard task={task} key={task.id}/>
        ))}
    </div>
  )
}
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList
