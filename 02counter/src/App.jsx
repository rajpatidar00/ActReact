import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter < 99) setCounter(counter + 1);
  };
  const removeVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>react with Raj </h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeVal}>remove value </button>
      <p>Footer</p>
    </>
  );
}

export default App;
