import React, {useState} from 'react';
import './App.css';
import message from './message.js';
function App() {
  let {count,setCount}=useState(1);
  return (
    <div >
      <message counter={count} />
    <button onClick={ () => setCount(count+1) }>update counter</button>
    </div>
  );
}

export default App;
