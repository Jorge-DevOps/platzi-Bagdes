import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BadgesNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import layout from '../components/layout'
import NotFoud from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route component={NotFoud} />

        </Switch>
      </layout>
    </BrowserRouter>
  );
}
export default App;
