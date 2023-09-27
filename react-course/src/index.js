import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  let [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("se ejecuto el useEffect");
  }, [counter]);

  return (
    <>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("el mensaje es " + mensaje);
        }}
      >
        Save
      </button>

      <hr/>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>Incrementar</button>

    </>
  );
}

root.render(
  <>
    <Counter />
  </>
);
