import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from './productCard.jsx';
import Registerhook from './Registerhook.jsx'
import ProductComponent from './productComponent.jsx';


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<ProductCard/>} />
        <Route path='/registerhook' element={<Registerhook />} />
        <Route path="/productComponent" element={<ProductComponent />} />
                
      </Routes>
    </Router>
    </>
  )
}

export default App
