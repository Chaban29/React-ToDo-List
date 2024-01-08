import React from "react";
import styled from "styled-components";
import "../../styles/main.module.scss";
import todoLogo from "../../images/icons/to-do-list.png";

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 50px;
  text-align: center;
  font-size: 4rem;
  color: ${(props) => props.color || "#cccc"};
  font-weight: 600;
  padding-top: 50px;
`;

export const TodoTitle = ({ children, ...props }) => {
  return (
    <StyledTitle>
      <img src={todoLogo} className='todo__logo' alt="ToDo Icon" width={"100"} height={"100"} />
      {children}
    </StyledTitle>
  );
};
