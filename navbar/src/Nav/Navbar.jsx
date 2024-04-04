import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <header className='header'>
        <div className='navbar'>
            <h1>Pa<span>W</span>an</h1>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Services</li>
</ul>
        </div>

    </header>

    <p style={{color:'red',textAlign:'center',marginTop:'20%',fontSize:'40px'}}>Practice Page</p>
  </>
  )
}

export default Navbar