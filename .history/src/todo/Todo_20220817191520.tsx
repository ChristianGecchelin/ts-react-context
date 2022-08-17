import React from "react";
import { TodoProvider } from './context/TodoProvider'

export const Todo = () => {
  return (
    <TodoProvider>
      <h1>To Do</h1>
    </TodoProvider>
  );
};
