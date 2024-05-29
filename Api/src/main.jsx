import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ProductCard from './productCard.jsx'
import Registerhook from './Registerhook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      {/* <ProductCard /> */}
      <Registerhook/>
   
  </React.StrictMode>
)
