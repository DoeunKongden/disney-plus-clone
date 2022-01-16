import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Nav from './Component/Header';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
