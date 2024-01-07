import React from "react";
import { TodoTitle } from "../ToDoTitle/TodoTitle";
import { ToDoInput } from "../ToDoInput/ToDoInput";

export const ToDo = () => {
  return (
    <>
      <TodoTitle>React ToDo List</TodoTitle>
      <ToDoInput />
    </>
  );
};
