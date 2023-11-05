import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QR from './QR';
import React from "react";




function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className="header-item">
            <div className="name-container">
              <center><h1>SwiftCare</h1></center>
              <MyTabs />
              <br></br>
            </div>
          </div>
        </div>

        <div> 
          <Link to="/QR">QR</Link>
        </div>

        <Routes>
          <Route path="/QR" element={<QR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
