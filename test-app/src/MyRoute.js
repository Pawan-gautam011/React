import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Layouts from './pages/Layouts'
import HomePages from './pages/HomePages'
import Products from './pages/Products'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'


// as Router Shortcut name

const MyRoute = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layouts/>}>
            <Route path='home' element={<HomePages/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default MyRoute