import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
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
  return( <><h1 className="help">⚠️ Under Construction ⚠️</h1>
  <div className='products'>
  
  </div></>
  );
}
const Header = () => {
  return (
    <>
      <h1>🚀 Sbace_INC.</h1>
       
      <div className='nav'>
        <a>Home</a>
        <a>Market</a>
        <div className="search">
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s" 
        />
        <button>
          search
        </button>
        </div>
      </div>
      
    </>
  );
}
