import React from 'react';
import Header from '../header/index.jsx';

function Wrapper (props) {
  return <div className="container">
    <Header />
    {props.children}
  </div>
}

export default Wrapper;