import React from "react";
import "./App.css";
import SmurfForm from './smurfForm';
import DisplaySmurf from './displaySmurf';
import styled from 'styled-components';

const H1 = styled.h1 `
font-family: monospace;
`

function App() {
 
    return (
      <div className="App">
      
      <H1>SMURF VILLAGE WELCOME!</H1>
      <DisplaySmurf/>
      <SmurfForm/>
      </div>
    );
}

export default App;
