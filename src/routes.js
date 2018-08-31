import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Files from "components/Files";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Files} />
    </Switch>
  </Router>
);

export default Routes;
