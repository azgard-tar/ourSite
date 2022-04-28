import React, { lazy, useState, useEffect } from 'react';
import { useLocation  } from "react-router-dom";
const HeaderNav = lazy(() => import('../headerNav/index.jsx'));
const HeaderHeart = lazy(() => import('../headerHeart/index.jsx'));
import './index.scss';

export default function Header(props) {
  const [isDisplayed, setDisplayStatus] = useState(false);
  let location = useLocation()

  useEffect(
    () => {
      setDisplayStatus(false);
    },
    [location]
  )

  return (
    <div className="header d-flex my-3 align-items-center flex-column">
      <div 
        className="header_wrapper"
        onMouseEnter={() => setDisplayStatus(true)}
        onMouseLeave={() => setDisplayStatus(false)}
      >
        <HeaderHeart isNavDisplayed={isDisplayed}/>
        <HeaderNav isNavDisplayed={isDisplayed}/>
      </div>
    </div>
  )
}