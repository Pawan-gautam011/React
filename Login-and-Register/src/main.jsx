import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
    <Register/>
  </React.StrictMode>,
)
