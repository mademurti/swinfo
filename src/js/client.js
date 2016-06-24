import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Films from "./components/Films";
import Film from "./components/Film";
import People from "./components/People";
/*import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";*/

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="films" component={Films}></Route>
      <Route path="film/:id" component={Film}></Route>
      <Route path="people(/:id)" component={People}></Route>
      {/*<Route path="planets(/:id)" component={Planets}></Route>
      <Route path="species(/:id)" component={Species}></Route>
      <Route path="starships(/:id)" component={Starships}></Route>
      <Route path="vehicles(/:id)" component={Vehicles}></Route>*/}
    </Route>
  </Router>,
app);
