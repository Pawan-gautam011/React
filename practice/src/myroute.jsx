import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import App from './App'
import FirstApp from './firstApp'



// as Router Shortcut name

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path='/redux' element={<App/>}/>
            <Route path='/firstApp' element={<FirstApp/>}/>
          
        </Routes>
        
    </Router>
  )
}

export default MyRoute