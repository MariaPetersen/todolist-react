import React from "react";
import Todo from "./Todo";
import { Typography } from "@mui/material";

export default function DisplayTodos({ todos, setTodos, type }) {
  function deleteTodo(id) {
    const updatedTodo = todos.filter((element) => element.id !== id);
    setTodos(updatedTodo);
    console.log(updatedTodo);
  }

  function setCompletion(id) {
    const updatedTodos = todos.map((element) => {
      if (element.id === id) {
        return { ...element, completion: !element.completion };
      } else {
        return element;
      }
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <Typography>{type === "todo" ? "A faire" : "Terminées"}</Typography>
      {type === "todo"
        ? todos.map(
            (todo) =>
              todo.completed === false && (
                <Todo
                  key={todo.id}
                  todo={todo}
                  setCompletion={setCompletion}
                  deleteTodo={deleteTodo}
                />
              )
          )
        : todos.map(
            (todo) =>
              todo.completed === true && (
                <Todo
                  key={todo.id}
                  todo={todo}
                  setCompletion={setCompletion}
                  deleteTodo={deleteTodo}
                />
              )
          )}
    </div>
  );
}
