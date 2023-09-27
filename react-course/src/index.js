import React from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const user = [
  {
    id: 1,
    name: "John",
    image: "https://robohash.org/user2",
  },
  {
    id: 2,
    name: "Pedro",
    image: "https://robohash.org/user1",
  },
];

root.render(
  <>
    {user.map((user, indice) => {
      return (
        <div key={indice}>
          <h1>{user.name}</h1>
          <img src={user.image} alt={user.name} />
        </div>
      );
    })}
  </>
);
