import React from 'react';
import ClickCounter from '../component/ClickCounter';
import HoverCounter from '../component/HoverCounter';
import StaticComp from '../component/StaticComp';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <br />
      <HoverCounter data={20} />
      <br />
      <ClickCounter value={30} />
      <br />
      <StaticComp />
    </div>
  );
}

export default App;
