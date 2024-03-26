import React,{useState} from "react";
import style from "./style.css";

const App =() =>{
    const[Number,SetNumber] = useState(0);
    return <div>
        <h1>{Number}</h1> <hr></hr>
                
        <button onClick={() =>SetNumber(Number + 1)} className="button">Increment</button>
        <button onClick={() =>SetNumber(Number -1) } className="button">Decrement</button>
        <button onClick={() =>SetNumber(0)} className="button">Reset</button>
    </div> 
}


export default App;