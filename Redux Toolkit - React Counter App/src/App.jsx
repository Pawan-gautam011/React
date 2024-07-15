import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './redux/counterSlice';

function App() {


  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();


  return (
    <>
      <h1>Redux Toolkit - React Counter</h1>
     <div style={{display:'flex', alignItems:'center', marginLeft:'250px', fontSize:'30px',gap:"30px"}}>
     <button id="decrease"
     onClick={()=> dispatch(decrement())}
     >-</button>
     <div className="count">{counter}</div>
     <button id='increase'
      onClick={()=> dispatch(increment())}
     >+</button>
      </div>
    </>
  )
}

export default App
