import React from "react";
import { TodoProvider } from './context/TodoProvider'
import { TodoList } from "./components/TodoList";
export const Todo = () => {
  return (
    <TodoProvider>
      <h1>To Do</h1>
      <TodoList/>
    </TodoProvider>
  );
};
