import React from 'react';
import './index.scss';

class MenuHeart extends React.Component {
  render() {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="heart-loader"
      viewBox="0 0 90 90"
    >
      <g className="heart-loader__group">
        <path
          fill="none"
          d="M0 30v60h60V30z"
          className="heart-loader__square"
        ></path>
        <path
          fill="none"
          d="M60 60a30 30 0 01-60 0 30 30 0 0160 0"
          className="heart-loader__circle m--left"
        ></path>
        <path
          fill="none"
          d="M60 60a30 30 0 01-60 0 30 30 0 0160 0"
          className="heart-loader__circle m--right"
        ></path>
        <path
          strokeWidth="2"
          d="M60 30a30 30 0 010 60H0V30a30 30 0 0160 0"
          className="heart-loader__heartPath"
        ></path>
      </g>
    </svg>
    ) 
  }
}

export default MenuHeart;