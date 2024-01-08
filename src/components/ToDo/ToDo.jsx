import React, { useState } from "react";
import { TodoTitle } from "../ToDoTitle/TodoTitle";
import "../../components/ToDo/todo.scss";
import { ToDoForm } from "../TodoForm/ToDoForm";
import { TodoOutput } from "../ToDoOutput/ToDoOutput";
import cl from '../../styles/main.module.scss';

export const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Date.now(), task: todo, completed: false, isEditing: false },
    ]);

    console.log(todos);
  };

  return (
    <div>
      <TodoTitle>React ToDo List</TodoTitle>
      <div>
        <h2 className={cl.done__title}>Get things Done!</h2>
        <ToDoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <TodoOutput task={todo} key={index + 1} />
        ))}
      </div>
    </div>
  );
};
