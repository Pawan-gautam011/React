import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(3); 
  const name = "ey";


  const incrementCount = () => {
    setCount(count + 1);
  };

  if(count === 3){
    console.log("Heloo")
  }
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button style={{ margin: '10px' }} onClick={decrementCount}>Decrement</button>
    </>
  );
}

export default App;
