import { useState } from "react";
import PropTypes from 'prop-types';

function TaskForm({createTask}) {

  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Escribe tu tarea" 
        onChange={e => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;

TaskForm.propTypes = {
  createTask: PropTypes.array.isRequired,
};