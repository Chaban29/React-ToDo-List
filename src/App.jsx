import styled from "styled-components";
import { TodoTitle } from "./components/ToDoTitle/TodoTitle";
import "./styles/main.module.scss";

const AppWrapper = styled.div`
  width: 100%;
`;

export const App = () => {
  return (
    <AppWrapper>
      <TodoTitle>React ToDo List</TodoTitle>
    </AppWrapper>
  );
};
