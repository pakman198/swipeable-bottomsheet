import React, { useState } from 'react';
import './App.css';
import BottomSheet from './BottomSheet/BottomSheet';
import SwipeableBottomSheet from './SwipeableBottomSheet/SwipeableBottomSheet';

function App() {

  const [visibility, setVisibility] = useState();
  const [swipeableVisibility, setSwipeableVisibility] = useState();

  const toggleVisibility = () => {
    console.log("Toggle visibility");
    setVisibility(!visibility);
  }

  const toggleSwipeable = () => {
    console.log("Toggle visibility");
    setSwipeableVisibility(!swipeableVisibility);
  }

  return (
    <div className="App">
      <button className="toggler" onClick={toggleVisibility}>Toggleable Bottom sheet</button>
      <button className="toggler" onClick={toggleSwipeable}>Swipeable bottom sheet</button>

      <BottomSheet visibility={visibility} />
      <SwipeableBottomSheet visibility={swipeableVisibility} visibilityToggler={setSwipeableVisibility} />
    </div>
  );
}

export default App;
