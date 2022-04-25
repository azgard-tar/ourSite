import ReactDOM from "react-dom/client";
import React from "react";
import Background from "./components/background/index.jsx";
import Wrapper from "./components/wrapper/index.jsx";
import './assets/scss/app.scss';

ReactDOM.createRoot(
  document.getElementById("app")
)
.render(
  <div className="mainContainer p-0 d-flex align-items-center fullHeightWidth flex-column">
    <Background />
    <Wrapper />
  </div>
);