import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Store from './store'
import Pokemon from './container'

function App() {
  return (
    <Provider store ={Store}>
      <div className="App">
      <Pokemon/>
      </div>
    </Provider>
  );
}

export default App;
