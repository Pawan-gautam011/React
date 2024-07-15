import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layouts from './Layouts'
import Header from './Header'
import Footer from './Footer'

function MyRoute() {
  return (

    <Router>
        <Routes>
            <Route path='/' element={<Layouts/>} />
            <Route path='home' element={<Header/>}/>
            <Route path='footer' element={<Footer/>}/>
        </Routes>
    </Router>
  
  )
}

export default MyRoute