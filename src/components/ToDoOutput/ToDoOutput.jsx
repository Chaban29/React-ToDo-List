import React from "react";
import styled from "styled-components";
import edit from "../../images/icons/free-icon-edit-tools-9800957.png";
import closed from "../../images/icons/free-icon-close-10337623.png";
import cl from "../../styles/main.module.scss";

const OutputTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f3f5f9;
  color: #737373;
  font-size: 18px;
  max-width: 400px;
  margin: 20px auto;
  border-radius: 20px;
  padding: 15px 10px;
`;

export const TodoOutput = ({ task }) => {
  return (
    <div>
      <OutputTitle>
        <h4>{task.task}</h4>
        <div className={cl.btn__wrapper}>
          <img
            src={edit}
            style={{ maxWidth: "25px", cursor: "pointer" }}
            alt="edit icon"
          />
          <img
            src={closed}
            style={{ maxWidth: "25px", cursor: "pointer" }}
            alt="closed icon"
          />
        </div>
      </OutputTitle>
    </div>
  );
};
