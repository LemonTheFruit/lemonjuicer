import lemon from './lemon.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  let [count, setCount, message] = useState(0);
  const incrementCount = () => { 
    setCount(count + 1);
   }
   if (count === 0){ message = "Welcome! Click the lemon to start juicing!"}
   if (count === 18){ message = "You've juiced enough lemons for a gallon of lemonade!"}
   
  return (
    <div className="App">
      <header className="App-header">
        
        <button style={{outline: 0}} onClick={incrementCount}><img src={lemon} className="App-logo" alt="logo" /></button>
        <p>
          You have juiced {count} lemons.
        </p>
        <p>{message}</p>
      </header>
      <body></body>
    </div>
  );
}

export default App;
