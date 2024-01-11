import { ToDoInput } from "../ToDoInput/ToDoInput";
import styled from "styled-components";
import cl from "../../styles/main.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  background: #f3f5f9;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0px 10px;
`;

export const EditToDoForm = ({ editTodo, task, deleteTodoItem }) => {
  const [value, setValue] = useState(task.task);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id);
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
            placeholder="Update Task"
          />
          <CancelIcon
            onClick={() => deleteTodoItem(task.id)}
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
          Update Task
        </Button>
      </Form>
    </div>
  );
};
