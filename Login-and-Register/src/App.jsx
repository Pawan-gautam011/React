import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Newform from './components/Newform'
function App() {
  

  return (
    <>
     <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/new' element={<Newform/>} />
    </Routes>
  </Router>
    </>
  )
}

export default App
