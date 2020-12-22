import React, { useState } from 'react';
import Login from './features/Login Page/Login'
// import LoginNavBar from './features/loginPage/LoginNavBar'
// import DisplayHome from './features/homePage/DisplayHome'
// import Navbar from './features/universal/NavBar'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
