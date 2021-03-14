import React, { useState } from 'react';
import Login from './features/Login Page/Login'
import Home from './features/Home Page/Home'
import Navbar from './features/Navbar/Navbar'
import Profile from './features/Profile Page/Profile'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const NavBarView = () => {
    let location = useLocation();

    if (location.pathname === "/" || location.pathname === "/login") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="App">
      {NavBarView() ? <Navbar /> : null}
      <Switch>
        <Route exact path={"/"}>
          <Redirect to="/login" />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/home"}>
          <Home />
        </Route>
        <Route exact path={"/profile"}>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
