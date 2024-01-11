import React, { useState } from "react";
import { TodoTitle } from "../ToDoTitle/TodoTitle";
import "../../components/ToDo/todo.scss";
import { ToDoForm } from "../TodoForm/ToDoForm";
import { TodoOutput } from "../ToDoOutput/ToDoOutput";
import cl from "../../styles/main.module.scss";
import { EditToDoForm } from "../EditToDoForm/EditToDoForm";

export const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Date.now(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodoItem = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <TodoTitle>React ToDo List</TodoTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2 className={cl.done__title}>Get things Done!</h2>
        <ToDoForm addTodo={addTodo} />
        {todos.length < 1 && <h2>ToDo is Empty</h2>}
        {todos.length > 0 &&
          todos.map((todo, index) =>
            todo.isEditing ? (
              <EditToDoForm
                deleteTodoItem={deleteTodoItem}
                editTodo={editTask}
                task={todo}
              />
            ) : (
              <TodoOutput
                task={todo}
                key={index + 1}
                deleteTodoItem={deleteTodoItem}
                editTodoItem={editTodoItem}
              />
            )
          )}
      </div>
    </div>
  );
};
