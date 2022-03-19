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
import Explore from "./components/pages/Explore";
import Books from "./components/pages/Books";
import Profile from "./components/pages/Profile";
import Gallery from "./components/pages/Gallery";
import BookReader from "./components/pages/BookReader";
import { PuffLoader } from "react-spinners";
import PdfReader from "./components/pages/PdfReader";

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
          <Route path="/explore" exact component={Explore} />
          <Route path="/subscription" exact component={Subscription} />
          <Route path="/category/books" exact component={Books} />
          <Route path="/category/books/:bookId" exact component={BookReader} />
          <Route
            path="/category/books/read/:bookName"
            exact
            component={PdfReader}
          />
          <Route path="/category/gallery" exact component={Gallery} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
