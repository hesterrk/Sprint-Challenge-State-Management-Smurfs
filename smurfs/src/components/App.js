import React from "react";
import "./App.css";
import SmurfForm from './smurfForm';
import DisplaySmurf from './displaySmurf';


function App() {
 
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
      <DisplaySmurf/>
       <SmurfForm/>


      </div>
    );
  
}

export default App;
