import { React } from "react";
import styled from "styled-components";
import closed from "../../images/icons/x-button.png";

const Input = styled.input`
  padding: 10px 15px;
  outline: none;
  border: none;
  caret-color: #737373;
  background: #f3f5f9;
  color: #737373;
  font-size: 28px;
  max-width: 500px;
  border-radius: 20px;
`;

const ToDoWrapper = styled.div`
  background: #f3f5f9;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const ToDoInput = ({ ...rest }) => {
  return (
    <div>
      <div>
        <ToDoWrapper className="todo__input">
          <Input {...rest}></Input>
          <img
            src={closed}
            style={{ maxWidth: "30px", marginRight: "10px", cursor: "pointer" }}
            alt=""
          />
        </ToDoWrapper>
      </div>
    </div>
  );
};
