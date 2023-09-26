import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import {MyButton} from "./Button";
import { TaskCard } from "./Tarea";
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <MyButton text="Saludar" />

    <form onSubmit={(e)=>{
      e.preventDefault();
      console.log("Formulario enviado");
    } }>
      <h1>Formulario</h1>
      <button type="submit">Enviar</button>
    </form>
  </>
);
