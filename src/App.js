// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';
import About from './components/About';
import Foter from './components/Foter';
import Login from './components/Login';
import Contactus from'./components/Contactus';
 // Ensure this component exists

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Foter />
      </div>
    </Router>
  );
}

export default App;
