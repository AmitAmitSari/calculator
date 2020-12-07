import './App.css';
import React, { useState } from 'react'


function Button(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}


function App() {
  let [text, setText] = useState('initial');
  return (
    <div>
      <Button text={text} onClick={() => setText(text + '0')}></Button>
    </div>
  );
}

export default App;
