import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../../components/AppHeader/AppHeader";
import Register from "../Register/Register";
import Home from "../Home/Home";

function App() {
  return (
    <div>
      <Router>
        <AppHeader />

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
