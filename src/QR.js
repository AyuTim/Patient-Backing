import logo from './logo.svg';
import './QR.css';

function QR() {
  return (
    <div className="QR">
      <header className="QR-header">
        <img src={logo} className="QR-logo" alt="logo" />
        <p>
          Edit <code>src/QR.js</code> and save to reload.
        </p>
        <a
          className="QR-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React
        </a>
      </header>
    </div>
  );
}


export default QR;
