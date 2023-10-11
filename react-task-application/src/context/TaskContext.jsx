import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);
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

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
