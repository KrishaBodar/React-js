import { useState } from 'react';
import './App.css'

function App() {

  // Initialize counter state with a default value of 5
  // This state will be used to track the counter value
  // The useState hook returns an array with the current state and a function to update it
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log('Counter value:', {counter: counter + 1});
    }
  }

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log('Counter value:', {counter: counter - 1});
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removevalue}
      >Remove value {counter}</button>
    </>
  )
}

export default App
