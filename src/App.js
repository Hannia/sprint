import React, { Component } from "react";
import Home from "./components/home";
import Episodes from "./components/episodes";

import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/episodes" component={Episodes} />
            <Redirect to="/" exact to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
