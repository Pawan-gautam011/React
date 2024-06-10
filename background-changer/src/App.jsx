import { useState } from 'react'
import './App.css'

function App() {


  const [color,setColor] = useState("Brown")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 cursor-pointer rounded-xl '>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"blue"}} onClick={()=> setColor ("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"pink"}} onClick={()=> setColor ("pink")}>Pink</button>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"purple"}} onClick={()=> setColor ("purple")}>Purple</button>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"Maroon"}} onClick={()=> setColor ("Maroon")}>Maroon</button>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"Salmon"}} onClick={()=> setColor ("Salmon")}>Salmon</button>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"Crimson"}} onClick={()=> setColor ("Crimson")}>Crimson</button>
          <button className='outline-none px-4 py-1 text-white'style={{backgroundColor:"Chocolate"}} onClick={()=> setColor ("Chocolate")}>Chocolate</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
