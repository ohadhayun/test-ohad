import React, { useState } from 'react';
import './App.css';
const axios = require('axios');

function App() {
  const [jokeSetup, setJokeSetup] = useState("Hello World! threre is no joke yet!");
  const [jokePunch, setJokePunch] = useState();

  const changePic = async () => {
    const answer = await axios.get('http://localhost:3001/');
    let rand = Math.floor(Math.random() * answer.data.length);

    setJokeSetup(answer.data[rand].setup);
    setJokePunch(answer.data[rand].punchline);
  }

  return (
    <div className="App">
      {/* <img src={src} alt="cat" width="400" height="400" /> */}
      <h1>{jokeSetup}</h1>
      <h2>{jokePunch}</h2>
      <button onClick={changePic}> Get joke</button>
    </div>
  );
}

export default App;
