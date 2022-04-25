import React from 'react';
import MenuHeart from '../menuHeart/index.jsx';

class Header extends React.Component {
  render() {
    return (
      <div className="header d-flex my-3 align-items-center flex-column">
        <MenuHeart />
      </div>
    )
  }
}

export default Header;