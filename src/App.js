import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Cart } from "./components/Cart";
import Items from "./components/Items";
import { Default } from "./components/Default";
import { Main } from "./components/Main";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Lookbook } from "./components/Lookbook";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/items">
          <Items />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/lookbook">
          <Lookbook />
        </Route>
        <Route path="*">
          <Default />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
