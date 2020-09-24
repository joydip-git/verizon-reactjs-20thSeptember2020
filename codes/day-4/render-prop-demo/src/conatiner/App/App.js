import React from 'react';
import ClickCounter from '../../component/ClickCounter';
import Counter from '../../component/Counter';
import HoverCounter from '../../component/HoverCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter
        name='joydip'
        render=
        {
          (commonData, commonFn) => {
            return <ClickCounter
              value={100}
              counterValue={commonData}
              increaseCounterCallback={commonFn} />
          }
        } />
      <Counter
        name='joydip'
        render=
        {
          (commonData, commonFn) => {
            return <HoverCounter
              data='Hover'
              counterData={commonData}
              increaseCounterCallback={commonFn} />
          }
        } />
    </div>
  );
}

export default App;
