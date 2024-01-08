import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { App } from "./App";
import "./styles/main.module.scss";
import { createGlobalStyle } from "styled-components";

const AppReset = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

`;

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppReset />
    <App />
  </React.StrictMode>
);
