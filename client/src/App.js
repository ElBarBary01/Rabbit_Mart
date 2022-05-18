import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
export default App;
function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}



function Hello(props) {
  return <h1>Hello World!</h1>;
}
const Header = () => {
  return (
    <>
      <h1>Sbace_INC.</h1>
      <div className='nav'>
        <a>Home</a>
        <p>Market</p>
      </div>
    </>
  );
}