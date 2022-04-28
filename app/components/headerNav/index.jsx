import React from 'react';
import { Link  } from "react-router-dom";
import './index.scss';

export default function HeaderNav(props) {
  return (
    <nav className={`header_nav ${props.isNavDisplayed ? '' : 'hideElement'}`}>
      <ul className="nav-links">
        <li className="link"><Link to="/">Мы</Link></li>
        <li className="link"><Link to="/values">Наши ценности</Link></li>
        <li className="link"><Link to="/photo">Лучшие фото</Link></li>
        <li className="link"><Link to="/happiness">Видео счастья</Link></li>
        <li className="link"><Link to="/relatives">Любимые родственники</Link></li>
        <li className="link"><Link to="/dreams">Заветные мечты</Link></li>
        <li className="link"><Link to="/handmade">Hand made</Link></li>
        <li className="link"><Link to="/events">Интересные события</Link></li>
      </ul>
    </nav>
  );
};