import styled from "styled-components";
import React from "react";

const Button = styled.button`
  background: linear-gradient(
    90deg,
    rgba(29, 29, 176, 1) 50%,
    rgba(2, 0, 36, 1) 100%,
    rgba(0, 212, 255, 0.960471044014851) 100%
  );
  border: none;
  padding: 12px 15px;
  border-radius: 10px;
  color: #f4f5f9;
  font-size: 1rem;
  cursor: pointer;
`;

export const ToDoButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
