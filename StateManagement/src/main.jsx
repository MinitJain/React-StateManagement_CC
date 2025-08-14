import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./TOPICS/useState/App";
import AppX from "./TOPICS/useReducer/App";
import AppY from "./TOPICS/useMemo,UseCallBack/App.jsx";
import AppZ from "./TOPICS/useEffect/App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <AppX /> */}
    {/* <AppY /> */}
    <AppZ />
  </>
);
