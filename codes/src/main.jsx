import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Products from './Products.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/products" element={<Products/>} />
    

  </Routes>
  </BrowserRouter>


  </React.StrictMode>,
)
