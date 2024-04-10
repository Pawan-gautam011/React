import React from 'react'
import Carousel from '../components/Carousel'
import {Helmet} from 'react-helmet'
import CardContainer from '../components/CardContainer'




const HomePages = () => {
  return (
    <>
  <Helmet>
    <title>Ecommerce-site</title>
    </Helmet>
    <Carousel/>
    <CardContainer/>


    </>

  )
}

export default HomePages