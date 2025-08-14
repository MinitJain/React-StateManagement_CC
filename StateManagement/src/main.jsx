import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./TOPICS/useState/App";
import AppX from "./TOPICS/useReducer/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AppX />
  </StrictMode>
);
