import React, { useState } from 'react';
// import Login from './features/Login Page/Login'
import Login from './features/Login Page/Login'
import Home from './features/Home Page/Home'
import Navbar from './features/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route exact path={"/home"}>
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
