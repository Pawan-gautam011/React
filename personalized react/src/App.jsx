import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(10); 
  const name = "ey";


  const incrementCount = () => {
    if(count < 20){
    setCount(count + 1);
    }
  };


  const decrementCount = () => {
    if(count > 0){
    setCount(count - 1);
    }
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
