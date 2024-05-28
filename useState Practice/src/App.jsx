import { useState } from "react"

const App = () => {



const [inputValue, newChangeValue] = useState("PawanG");
console.log(inputValue)


const onChange = (hello) => {
  const newVal = hello.target.value
  newChangeValue(newVal)
}

  return (
    <div>
    <h1>{inputValue}</h1>
   <input type="text" value={inputValue} placeholder="Enter Your Name" onChange={onChange}/>
  
   </div>
  )
}

export default App