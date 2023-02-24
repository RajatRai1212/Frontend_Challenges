
import './App.css';
import qr from './images/qr.png'

function App() {
  return (
    <div className="App">
      <div className="hero">
        <img src = {qr} alt=" scaner" />
        <h4>Improve your front-end skills by building projects</h4>
        <br />
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
