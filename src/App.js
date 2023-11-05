import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QR from './QR';
import Floor from './Floor'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className="header-item">
            <div className="name-container">
              <center><h1>SwiftCare</h1></center>
              <br></br>
            </div>
          </div>
        </div>

          <div className="QR-Tab"> <center>
            <Link to="/QR">QR Code</Link>
            <Link to="/Floor">       Floors</Link>
            </center>
          </div>
        </div>
        <Routes>
          <Route path="/QR" element={<QR />} />
        </Routes>

        <Routes>
          <Route path="/Floor" element={<Floor />} />
        </Routes>
      <script></script>
    </Router>
  );
}

export default App;
