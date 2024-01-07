import styled from "styled-components";
import "./styles/main.module.scss";
import { ToDo } from "./components/ToDo/ToDo";

const AppWrapper = styled.div`
  max-width: 1040px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
`;

export const App = () => {
  return (
    <AppWrapper>
      <ToDo />
    </AppWrapper>
  );
};
