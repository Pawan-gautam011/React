import { useState,useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0); 

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const Recent =()=>{
    setNumber(0)
  }

  useEffect(() => {
    console.log(`Number has changed: ${number}`);
    // Perform any side effect here
  }, [number]);


  return (
    <>
      <h1 style={{ textAlign: "center" }}>{number}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={Recent}>Reset</button>  
    </>
  );
}

export default App;
