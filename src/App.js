import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect } from 'react'; 

let reader;

function decode(content) {
  const lines = content.split("\n");
  const key = new Map();
  const numbers = lines.map(line => {
    const split = line.split(" ");
    key.set(split[0], split[1]);
    return split[0];
  });

  console.log("Key: ", key);
  
  // rearrange contents to be ordered by number ascending
  // lines.sort();
  numbers.sort((a, b) => a - b);

  // build new array of pyramid lines
  const pyramid = [];
  for (let numberIndex = 0; numberIndex <= numbers.length; numberIndex++) {
    const splice = numberIndex === 0 ? numbers.splice(0, 1) : numbers.splice(0, numberIndex + 1);
    pyramid.push(splice);
  }

  console.log(pyramid);

  const message = pyramid.map( line => {
    debugger;
    const value = key.get(line[line.length - 1]); 
    console.log(key.get(line[line.length - 1]))
    return key.get(line[line.length - 1]);
  });

  console.log("Message: ", message.toLocaleString().replace(/,/g, " "));
  return message;
}

function readFile(file) {
  // console.log(event.srcElement.files[0])
  // const file = event.srcElement.files[0];
  const reader = new FileReader();

  const getContents = (e) => {
    const content = reader.result;
    console.log(content);
    decode(content);
  }

  reader.onloadend = getContents;
  reader.readAsText(file)
  // decode(content);
}

function App() {

  // const fileInput = useRef(null);

  // useEffect(() => {
  //   fileInput.current.addEventListener('change', event => readFile(event))
    
  //   return () => fileInput.current.removeEventListener('change', readFile)
  // })
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Load file:
        </p>
        <input type="file" onChange={e => readFile(e.target.files[0])} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
