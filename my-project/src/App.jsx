import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import  Form  from './Form'
import Controller from './Controller'
import  New  from './newfile'

function App() {
 

  return (
    <>

  <Router>
    <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/home' element={<New/>} />
      <Route path='/controller' element={<Controller/>} />
    </Routes>
  </Router>

    </>
  )
}


export default App
