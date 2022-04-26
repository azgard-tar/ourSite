import React from 'react';
import './index.scss';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className={`header_nav ${this.props.isNavDisplayed ? '' : 'hideElement'}`}>
        <ul className="nav-links">
          <li className="link"><a href="#">Наши ценности</a></li>
          <li className="link"><a href="#">Лучшие фото</a></li>
          <li className="link"><a href="#">Видео счастья</a></li>
          <li className="link"><a href="#">Любимые родственники</a></li>
          <li className="link"><a href="#">Заветные мечты</a></li>
          <li className="link"><a href="#">Hand made</a></li>
          <li className="link"><a href="#">Интересные события</a></li>
        </ul>
      </nav>
    )
  }
}

export default HeaderNav;