import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.module.scss";
import { Blog } from "./page/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>
);
