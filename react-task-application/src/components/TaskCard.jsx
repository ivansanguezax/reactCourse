import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskCard({task,deteleTask}) {
  const valor = useContext(TaskContext);
  return (
  console.log(valor),
      <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deteleTask(task.id)}
            >Eliminar</button>
    </div>

  )
}
TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
    deteleTask: PropTypes.func.isRequired,
  };

