import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import  Form  from './Form'

import  New  from './newfile'

function App() {
 

  return (
    <>

  <Router>
    <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/home' element={<New/>} />
    </Routes>
  </Router>

    </>
  )
}


export default App
