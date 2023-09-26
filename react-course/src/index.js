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
    <Saludar />
  </>
);
