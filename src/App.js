import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import DashBoard from "./pages/DashBoard";

const App = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(true);
  }, []);

  const PrivateRoute = ({ auth, component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (auth ? <Component {...props} /> : <Redirect to={{ pathname: "/about" }} />)}
      />
    );
  };

  return (
    <Router>
      <div>
        {auth && (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/about">About</Link>
              </li> */}
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <PrivateRoute exact path="/dashboard" component={DashBoard} auth={auth} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
