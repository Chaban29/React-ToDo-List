import React from "react";
import styled from "styled-components";
import "../../styles/main.module.scss";

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: ${(props) => props.color || "#737373"};
  font-weight: 600;
  padding: 100px 0;
  text-shadow: 4px 4px 2px rgba(188,177,177,1);
`;

export const TodoTitle = ({ children, ...props }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
