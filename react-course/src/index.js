import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));



function Counter() {
  let [ mensaje, setMensaje ] = useState('');

  return (
    <>
      <input 
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button 
        onClick={() => {
          alert('el mensaje es ' +mensaje);
        }}
      >Save</button>

    </>
  );
}

root.render(<>
  <Counter />
</>);
