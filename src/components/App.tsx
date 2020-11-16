import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./home";
import Card from "./card";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/card">
          <Card />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
