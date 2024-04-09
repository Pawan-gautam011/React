import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Login from './Login'

const Layouts = () => {
  return (
    <>

    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layouts