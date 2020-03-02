import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../search";
import Navbar from "../NavBar";
import SpecificMovie from "../SpecificMovie.js";

export default function Routing() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/SpecificMovie/:id" component={SpecificMovie} />
      </Switch>
    </Router>
  );
}
