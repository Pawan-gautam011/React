
import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ASDFGHJKLMNBVCXZQWERTYUIOPasdfghjklmnbvcxzqwertyuiop"

    if(setNumberAllowed) str += "0123456789"
    if (setCharacter) str += "! @ # $ % ^ & * ( ) - _ + = { } [ ] | : ;  ' < > . ? /"

    for ( let i = 1; i< array.length; i++){
      let char =Math.floor (Math.random() * str.length + 1)

      pass = str.charAt(char)
    }


    setPassword(pass)




  }, [length,numberallowed,character,password,setPassword])

  return (
    <>
      <h1 className='text-4xl text-white'>Password generator</h1>
    </>
  )
}

export default App
