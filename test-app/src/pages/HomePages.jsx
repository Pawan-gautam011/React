import React from 'react'
import Carousel from '../components/Carousel'
import { Card } from '../components/Card'
import {Helmet} from 'react-helmet'
import CardContainer from '../components/CardContainer'




const HomePages = () => {
  return (
    <>
  <Helmet>
    <title>Ecommerce-site</title>
    </Helmet>
    <Carousel/>
    <Card/>
    <CardContainer/>


    </>

  )
}

export default HomePages