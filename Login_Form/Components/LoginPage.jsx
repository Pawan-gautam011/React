import React from 'react'
import '../src/assets/index.css'

const LoginPage = () => {
  return (
   <form>
    <div className='mb-2'>
        <h1>Login</h1>
        <div className='form-control'>
          <label>Username</label>
          <input type='text' placeholder='Enter Username' />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input type='password' placeholder='Enter Password' />
        </div>
        <button className='btn btn-primary btn-block'>Login</button>
        <button className='btn btn-dark btn-block'>Register</button>

    </div>
   </form>
  )
}

export default LoginPage