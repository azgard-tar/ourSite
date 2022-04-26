import React from 'react';
import HeaderHeart from '../headerHeart/index.jsx';
import HeaderNav from '../headerNav/index.jsx';
import './index.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isNavDisplayed: false};
    this.setNavStatus = this.setNavStatus.bind(this);
  }
  setNavStatus() {
    this.setState({
      isNavDisplayed: !this.state.isNavDisplayed
    });
  }
  render() {
    const isNavDisplayed = this.state.isNavDisplayed;
    return (
      <div className="header d-flex my-3 align-items-center flex-column">
        <div 
          className="header_wrapper"
          onMouseEnter={this.setNavStatus}
          onMouseLeave={this.setNavStatus}
        >
          <HeaderHeart isNavDisplayed={isNavDisplayed}/>
          <HeaderNav isNavDisplayed={isNavDisplayed}/>
        </div>
      </div>
    )
  }
}

export default Header;