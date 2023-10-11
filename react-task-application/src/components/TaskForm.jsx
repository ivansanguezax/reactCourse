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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-8 rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-white ">Crea tu tarea</h1>
      <input className="w-full mb-4 p-2 rounded-md bg-slate-900 text-white"
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea className="w-full mb-4 p-2 rounded-md bg-slate-900 text-white"
        placeholder="escribe aqui"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="bg-indigo-500 px-2 py-1 rounded-md mt-4 hover:bg-green-400"
      >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
