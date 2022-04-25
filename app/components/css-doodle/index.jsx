import React from "react";
import 'css-doodle';
import './index.css';
  
class CssDoodle extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <css-doodle>{this.props.rules}</css-doodle>;
    }
}
  
export default CssDoodle;