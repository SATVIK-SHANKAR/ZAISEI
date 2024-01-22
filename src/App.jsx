import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import TradingViewWidget from './components/TradingViewWidget';

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }
  return (
    <div className="app">
      <Navbar />
      <Home />
      <TradingViewWidget />
      {/* {currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>} */}
      
    </div>
  );
}
export default App;

