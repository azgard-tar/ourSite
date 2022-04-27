
import React, { lazy } from "react";
const Background = lazy(() => import('/app/components/background/index.jsx'));

class HeaderNav extends React.Component {
  render() {
    return (
      <Background />
    )
  }
}

export default HeaderNav;