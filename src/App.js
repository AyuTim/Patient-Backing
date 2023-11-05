import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import QR from './QR';

const floorData = [
  {name: 'floor 1'},
  {name: 'floor 2'},
  {name: 'floor 3'},
  {name: 'floor 4'}
]
function App() {
  return (
    <div className="App">
      {/* Home/Introduction */}
      <div className="header">
        <div className="header-item">
          <div className="name-container">
            <center><h1>SwiftCare</h1></center>
            <div className = "floorData"> 
             </div>
          <br></br>
          </div>
        </div>
      </div>

      <div> 
        <Link to="/QR">QR</Link>
      </div>
    </div>
  );
}


export default App;
