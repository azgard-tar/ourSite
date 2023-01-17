import React from "react";
import CssDoodle from "../css-doodle/index.jsx";
import backgroundImage from './img/ourPhoto.png';
import './index.scss';
  
const firstDoodleRules = `
  background-image: url(${backgroundImage});
  @use: var(--firstPartVariables);
  @use: var(--rule);
`;
const secondDoodleRules = `
  background-image: url(${backgroundImage});
  @use: var(--secondPartVariables);
  @use: var(--rule);
`;
export default class Background extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return  (
      <div className="fullPageContainer">
        <div className="doodleContainer d-flex align-items-center justify-content-between">
          <CssDoodle rules={firstDoodleRules}/>
          <CssDoodle rules={secondDoodleRules}/>
        </div>
      </div>
    )
  }
}