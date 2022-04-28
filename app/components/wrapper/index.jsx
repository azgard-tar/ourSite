import React from 'react';
import Header from '../header/index.jsx';

function Wrapper (props) {
  return <div className="container p-0">
    <Header />
    {props.children}
  </div>
}

export default Wrapper;