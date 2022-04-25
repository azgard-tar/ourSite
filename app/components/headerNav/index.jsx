import React from 'react';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`header_nav ${this.props.isNavDisplayed ? '' : 'hideElement'}`}>
        Test
      </div>
    )
  }
}

export default HeaderNav;