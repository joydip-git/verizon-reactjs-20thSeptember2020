import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Hero heroName='Batman' />
      <Hero heroName='Joker' />
    </div>
  );
}

export default App;
