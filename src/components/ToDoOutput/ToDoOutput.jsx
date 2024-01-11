import React from "react";
import styled from "styled-components";
import cl from "../../styles/main.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const OutputTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f3f5f9;
  color: #737373;
  font-size: 18px;
  width: 540px;
  margin: 20px 0;
  border-radius: 20px;
  padding: 15px 10px;
`;

export const TodoOutput = ({ task, deleteTodoItem, editTodoItem }) => {
  return (
    <div>
      <OutputTitle>
        <h4>{task.task}</h4>
        <div className={cl.btn__wrapper}>
          <CheckBoxIcon style={{ cursor: "pointer" }} />
          <BorderColorIcon
            onClick={() => editTodoItem(task.id)}
            style={{ cursor: "pointer" }}
          />
          <CancelIcon
            style={{ cursor: "pointer", color: "#666" }}
            onClick={() => deleteTodoItem(task.id)}
          />
        </div>
      </OutputTitle>
    </div>
  );
};
