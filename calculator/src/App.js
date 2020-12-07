import './App.css';
import React, { useState } from 'react'


function Button(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}


function App() {
  let [number, setNumber] = useState(null);
  return (
    <div>
      <div>
        {number}
      </div>
      {
        Array(3).fill(null).map((_, i) => -i + 2).map(i => {
          return (
            <div>
            {
              Array(3).
              fill(null).
              map((_, j) => i * 3 + j + 1).
              map(num =>
                {return <Button text={num} onClick={() => setNumber(number * 10 + num)}></Button>})
            }
            </div>);
          })
      }
      <div>
        <Button text='-'></Button>
        <Button text='0' onClick={() => setNumber(number * 10)}></Button>
        <Button text='.'></Button>
      </div>
    </div>
  );
}

export default App;
