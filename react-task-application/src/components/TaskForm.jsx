import { useState } from "react";
import PropTypes from 'prop-types';

function TaskForm({createTask}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Escribe tu tarea" 
        onChange={e => setTitle(e.target.value)}
        autoFocus
      />
      <textarea placeholder="escribe aqui"
      onChange={e => setDescription(e.target.value)}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
};