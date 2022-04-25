import ReactDOM from "react-dom/client";
import React from "react";
import CssDoodle from "./components/css-doodle/index.jsx";
import './app.scss';

const firstDoodleRules = `
  @use: var(--firstPartVariables);
  @use: var(--rule);
`;
const secondDoodleRules = `
  @use: var(--secondPartVariables);
  @use: var(--rule);
`;

ReactDOM.createRoot(
  document.getElementById("app")
)
.render(
  <div className="doodleContainer">
    <CssDoodle rules={firstDoodleRules} />
    <CssDoodle rules={secondDoodleRules} />
  </div>
);