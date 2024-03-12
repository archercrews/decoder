import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect } from 'react'; 

let reader;

function decode(content) {
  const lines = content.split("\n");
  
  // rearrange contents to be ordered by number ascending
  lines.sort();

  // build new array of pyramid lines
  const pyramid = [];
  for (let lineIndex = 0; lineIndex <= lines.length; lineIndex++) {
    const splice = lineIndex === 0 ? lines.splice(0, 1) : lines.splice(0, lineIndex + 1);
    pyramid.push(splice);
  }

  console.log(pyramid);
  
}

function readFile(file) {
  console.log("hit")
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
