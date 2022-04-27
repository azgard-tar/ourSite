import ReactDom from "react-dom/client";
import Router from "./routes/Router.jsx";
import React from "react";

ReactDom.createRoot(
  document.getElementById("app")
)
.render(
  <Router />
);