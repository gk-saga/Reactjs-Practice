
import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={phoenix} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div class="sticky-top-alt">
        <div class="container">
          <Header/>
        </div>
      </div>
      <Banner/>
    </div>
  );
}

export default App;
