import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tranning from "./pages/Tranning";
import History from "./pages/History";
import ChatBot from "./pages/ChatBot";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import "./App.css"

const App = () => {
  return (
    <Router>
      <div class="container">
      <div class="sidenav">
        Sidenav
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home test</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/tranning">Tranning</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/chatBot">ChatBot</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container-page">
        <div class="topnav">
          topnav
        </div>
        <div class="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tranning" component={Tranning} />
          <Route exact path="/history" component={History} />
          <Route exact path="/chatbot" component={ChatBot} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact component={NotFound} />
        </Switch>
        </div>
        
        </div>
      </div>
      
    </Router>
  );
};

export default App;
