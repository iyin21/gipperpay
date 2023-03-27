import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ConfigProvider } from "react-avatar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider colors={["red", "green", "blue"]}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
