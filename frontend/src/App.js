import React, { useState } from 'react';
// import Login from './features/Login Page/Login'
import Login from './features/Login Page/Login'
// import DisplayHome from './features/homePage/DisplayHome'
// import Navbar from './features/universal/NavBar'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
