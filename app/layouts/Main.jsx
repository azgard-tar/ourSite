import React, { lazy } from 'react';
import { Outlet } from "react-router-dom";
const Wrapper = lazy(() => import('/app/components/wrapper/index.jsx'));
import "/app/assets/scss/app.scss";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="mainContainer p-0 d-flex align-items-center fullHeightWidth flex-column">
        <Wrapper>
          <Outlet />
        </Wrapper>
      </div>
    )
  }
}