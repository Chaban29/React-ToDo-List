import { React } from "react";
import styled from "styled-components";
import cl from "../../styles/main.module.scss";

const Input = styled.input`
  padding: 15px 15px;
  outline: none;
  border: none;
  caret-color: #737373;
  background: #f3f5f9;
  color: #737373;
  font-size: 18px;
  width: 500px;
  border-radius: 20px;
  &::placeholder {
    font-size: 16px;
  }
`;

const ToDoWrapper = styled.div`
  background: #f3f5f9;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const ToDoInput = ({ ...rest }) => {
  return (
    <div className={cl.input__wrapper}>
      <ToDoWrapper className={cl.input}>
        <Input {...rest}></Input>
      </ToDoWrapper>
    </div>
  );
};
