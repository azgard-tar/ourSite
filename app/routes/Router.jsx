import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import Layout from "/app/layouts/Main.jsx";
import App from "./MainPage/index.jsx";
import Values from "./Values/index.jsx";
import Photo from "./Photo/index.jsx";
import Happiness from "./Happiness/index.jsx";
import Relatives from "./Relatives/index.jsx";
import Dreams from "./Dreams/index.jsx";
import Handmade from "./Handmade/index.jsx";
import Events from "./Events/index.jsx";
import React, { Suspense } from 'react';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Suspense fallback={<div>Page is Loading...</div>} ><App /></Suspense>} />
            <Route path="values" element={<Values />} />
            <Route path="photo" element={<Photo />} />
            <Route path="happiness" element={<Happiness />} />
            <Route path="relatives" element={<Relatives />} />
            <Route path="dreams" element={<Dreams />} />
            <Route path="handmade" element={<Handmade />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}