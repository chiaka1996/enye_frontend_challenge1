import React from 'react';
import Navigation from './Components/navigation.js';
import Record from './Pages/Records.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Record />
    </div>
  );
}

export default App;