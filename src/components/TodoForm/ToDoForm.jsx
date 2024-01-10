import { ToDoInput } from "../ToDoInput/ToDoInput";
import styled from "styled-components";
import cl from "../../styles/main.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
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
  padding: 0px 10px;
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
          <CancelIcon
            onClick={clearInput}
            style={{ cursor: "pointer", color: "#666" }}
          />
        </InputWrapper>
        <Button
          style={{
            padding: "15px",
            fontSize: "18px",
            borderRadius: "20px",
            color: "#666",
          }}
          type="submit"
        >
          Add Task
        </Button>
      </Form>
    </div>
  );
};
