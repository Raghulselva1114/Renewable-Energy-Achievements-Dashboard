import React from 'react';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
// import IndiaMapDashboard from './components/IndiaMapDashboard';

function App() {
  return (
  <div className="min-h-screen bg-slate-100">
      <Router>
       <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/indiamapdasboard" element={<IndiaMapDashboard />} /> */}
          </Routes>
          {/* < IndiaMapDashboard /> */}
       
       </Router>
      
      </div>
      
      );
}
export default App;