import "./App.css";
import React, { useState } from "react";
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Login/>
    </div>
  );
}

export default App;
