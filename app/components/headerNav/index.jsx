import React from 'react';
import { Link  } from "react-router-dom";
import './index.scss';

export default function HeaderNav(props) {
  return (
    <nav className={`header_nav ${props.isNavDisplayed ? '' : 'hideElement'}`}>
      <ul className="nav-links">
        <li><Link to="/">Мы</Link></li>
        <li><Link to="/values">Наши ценности</Link></li>
        <li><Link to="/photo">Лучшие фото</Link></li>
        <li><Link to="/happiness">Видео счастья</Link></li>
        <li><Link to="/relatives">Любимые родственники</Link></li>
        <li><Link to="/dreams">Заветные мечты</Link></li>
        <li><Link to="/handmade">Hand made</Link></li>
        <li><Link to="/events">Интересные события</Link></li>
      </ul>
    </nav>
  );
};