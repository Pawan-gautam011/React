import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import MyRoute from './myroute.jsx'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <provider store={store} >

    
  
  <MyRoute/>
  </provider>
  </React.StrictMode>,
)
