import React from "react";
import styled from "styled-components";
import cl from "../../styles/main.module.scss";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 50px;
  text-align: center;
  font-size: 4rem;
  color: ${(props) => props.color || "#666"};
  font-weight: 600;
  padding-top: 50px;
`;

export const TodoTitle = ({ children, ...props }) => {
  return (
    <StyledTitle>
      <CheckBoxSharpIcon
        className={cl.hovered}
        style={{ width: "100px", height: "100px" }}
      />
      {children}
    </StyledTitle>
  );
};
