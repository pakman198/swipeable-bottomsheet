import React, { useState } from 'react';
import './App.css';
import BottomSheet from './BottomSheet/BottomSheet';

function App() {

  const [visibility, setVisibility] = useState();

  const toggleVisibility = () => {
    console.log("Toggle visibility");
    setVisibility(!visibility);
  }

  return (
    <div className="App">
      <button className="toggler" onClick={toggleVisibility}>display bottom sheet</button>

      <BottomSheet visibility={visibility} />
    </div>
  );
}

export default App;
