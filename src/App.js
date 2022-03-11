import lemon from './lemon.svg';
import './App.css';
import React, { useState } from 'react';
import { Shake } from 'reshake'



function App() {
  let message = ""
  const [count, setCount] = useState(0);
  // let [message, setMessage] = useState("")
  const incrementCount = () => { 
    setCount(count + 1);
   }
   if (count === 0){ message = "Welcome! Click the lemon to begin juicing." }
   if (count === 18){ message = "You've juiced enough lemons for a gallon of lemonade!"}
   
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={incrementCount}>
          <Shake 
            h={0}
            v={0}
            r={360}
            dur={300}
            int={63.4}
            max={100}
            fixed={true}
            fixedStop={false}
            freez={false}>
              <img src={lemon} className="App-logo" alt="logo" />
          </Shake>
        </button>
        <p>
          You have juiced {count} lemons.
        </p>
        <p class="pop-in-message">
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;
