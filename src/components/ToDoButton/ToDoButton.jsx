import styled from "styled-components";
import React from "react";

const Button = styled.button`
  background-image: radial-gradient(
    circle at 17.19% 72.97%,
    #00ffff 0,
    #00d9ff 25%,
    #0a9ed5 50%,
    #27688c 75%,
    #223b4e 100%
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
