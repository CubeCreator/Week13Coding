import './App.css';
import React, { useState } from "react";
import { Login } from "./Login"
import { Navbar } from "./Navbar"
import { Register } from "./Register"

function App() {
  const [currentForm, setCurrentForm] = useState['login'];

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div>
      <Navbar/>;
      <div> {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      </div>
    </div>
  );
}

export default App;
