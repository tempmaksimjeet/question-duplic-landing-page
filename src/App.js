import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css'
const fetch = require('node-fetch');


function App() {
  const [linkData, setLinkData] = useState("https://google.com");
  const getNames = () => {
    fetch('https://raw.githubusercontent.com/tempmaksimjeet/question-duplic-landing-page/main/src/link.txt')
      .then(res => res.text()).then(data => {
        setLinkData(data);
      }).catch(err => console.log('fetch error', err));
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Question Duplicity Detection
        </p>
        <a
          className="App-link"
          href={linkData}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to app
        </a>
      </header>
    </div>
  );
}

export default App;
