const React = require("react");
import 'css-doodle';
import './css-doodle.css';
  
class CssDoodle extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <css-doodle>{this.props.rules}</css-doodle>;
    }
}
  
module.exports = CssDoodle;