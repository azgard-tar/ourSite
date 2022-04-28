import ReactDom from "react-dom/client";
import Router from "./routes/Router.jsx";
import React from "react";
import moment from 'moment';
import '/app/assets/scss/app.scss';

window.moment = moment;

ReactDom.createRoot(
  document.getElementById("app")
)
.render(
  <Router />
);