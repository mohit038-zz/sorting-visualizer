import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./containers/App";
import { BubbleSortContextProvider } from "./contexts/BubbleSortContext";
import { ControlContextProvider } from "./contexts/ControlContext";

ReactDOM.render(
  <React.StrictMode>
    <ControlContextProvider>
      <BubbleSortContextProvider>
        <App />
      </BubbleSortContextProvider>
    </ControlContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
