import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Layouts from './pages/Layouts'
import HomePages from './pages/HomePages'
import Products from './pages/Products'


// as Router Shortcut name

const MyRoute = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layouts/>}>
            <Route index element={<HomePages/>} />
            <Route path='/' element={<Products/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default MyRoute