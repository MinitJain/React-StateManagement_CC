import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./TOPICS/useState/App";
import AppX from "./TOPICS/useReducer/App";
import AppY from "./TOPICS/useMemo,UseCallBack/App.jsx";
import AppZ from "./TOPICS/useEffect/App.jsx";
import App from "./TOPICS/ReduxTemplate/App.jsx";
import { Provider } from "react-redux";
import store from "./TOPICS/ReduxTemplate/store";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <AppX /> */}
    {/* <AppY /> */}
    {/* <AppZ /> */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
