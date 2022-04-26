import React from "react";
import CssDoodle from "../css-doodle/index.jsx";
import './index.scss';
  
const firstDoodleRules = `
  @use: var(--firstPartVariables);
  @use: var(--rule);
`;
const secondDoodleRules = `
  @use: var(--secondPartVariables);
  @use: var(--rule);
`;
export default class Background extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return  (
      <div className="doodleContainer d-flex align-items-center justify-content-between">
        <CssDoodle rules={firstDoodleRules}/>
        <CssDoodle rules={secondDoodleRules}/>
      </div>
    )
  }
}