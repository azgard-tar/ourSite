
import React, { lazy, Suspense } from "react";
const Background = lazy(() => import('./background/index.jsx'));
const Wrapper = lazy(() => import('./wrapper/index.jsx'));
import "/app/assets/scss/app.scss";

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mainContainer p-0 d-flex align-items-center fullHeightWidth flex-column">
        <Suspense fallback={<div>Page is Loading...</div>}>
          <section className="fullHeightWidth">
            <Background />
            <Wrapper />
          </section>
        </Suspense>
      </div>
    )
  }
}

export default HeaderNav;