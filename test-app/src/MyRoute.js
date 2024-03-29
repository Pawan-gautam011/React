import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import {Second} from './Second'
import { Practice } from './Practice'

// as Router Shortcut name

const MyRoute = () => {
  return (
    <Router>
        <Routes>

            <Route path='/' element={<Second/>} />
            <Route path='/Practice' element={<Practice/>} />
        </Routes>
    
    </Router>
  )
}

export default MyRoute