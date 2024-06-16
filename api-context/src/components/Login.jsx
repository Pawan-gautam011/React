import React , { useState,useContext } from "react"
import userContext from "../context/userContext"

function Login() {
    const [userName,setuserName] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = ()=>{

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login