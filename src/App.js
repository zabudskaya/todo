import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { count, length } from  './number.js';

const text = "Test № ";
const  boolean = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
            color: 'red'
        }}>Hello World!</h1>
          <p>
              {text}
              {1}
          </p>
          <p>
              {text}
              {1+1}
          </p>
          <p>
              {boolean ? 'boolean is true' : 'boolean is false'}
          </p>
          <p>
              {boolean && 'boolean is true'}
          </p>
          <p>
              {undefined}
              {null}
              {false}
              {true}
          </p>
          <p>
            {'Test import ' + count};
          </p>
        <p>
          {'Test import ' + length};
        </p>
      </header>
    </div>
  );
}

export default App;
