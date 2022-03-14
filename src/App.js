import React, { useEffect, useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { useDispatch, useSelector } from "react-redux";
import { restoreUser } from "./redux/actions/auth";
import About from "./components/pages/About";
import Subscription from "./components/pages/Subscription";

function App() {
  const authetication = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
  }, []);

  return (
    <>
      <Router>
        {/* <Navbar isAuthenticated={authetication.isAuthenticated} /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/about" exact component={About} />
          <Route path="/subscription" exact component={Subscription} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
