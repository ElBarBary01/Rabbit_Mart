import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
export default App;
function App() {
  return (
    <>
    <div className="App">
      <Header/>
    </div>
          <Hero/>
      <p>Please help 😢</p>
    </>
  );
}



function Hero(props) {
  return <h1 className="help">⚠️ Under Construction ⚠️</h1>;
  
}
const Header = () => {
  return (
    <>
      <h1>🚀 Sbace_INC.</h1>
      <div className='nav'>
        <a>Home</a>
        <p>Market</p>
      </div>
    </>
  );
}
