import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea
        placeholder="escribe aqui"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
