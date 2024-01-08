import { ToDoInput } from "../ToDoInput/ToDoInput";
import { ToDoButton } from "../ToDoButton/ToDoButton";
import styled from "styled-components";
import cl from "../../styles/main.module.scss";
import closed from "../../images/icons/free-icon-close-10337623.png";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
`;

const InputWrapper = styled.div`
  background: #f3f5f9;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  const clearInput = () => {
    setValue("");
  };

  return (
    <div>
      <Form className={cl.todoForm} onSubmit={handleSubmit}>
        <InputWrapper>
          <ToDoInput
            value={value}
            onChange={handleValueChange}
            type="text"
            placeholder="What is the task today?"
          />
          <img
            onClick={clearInput}
            src={closed}
            style={{ maxWidth: "30px", marginRight: "10px", cursor: "pointer" }}
            alt="closed icon"
          />
        </InputWrapper>
        <ToDoButton type="submit">Add Task</ToDoButton>
      </Form>
    </div>
  );
};
