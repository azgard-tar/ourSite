const ReactDOM = require("react-dom/client");
const React = require("react");
const CssDoodle = require("./components/css-doodle/index.jsx");

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
  <div class="container">
    <CssDoodle rules={firstDoodleRules} />
    <CssDoodle rules={secondDoodleRules} />
  </div>
);