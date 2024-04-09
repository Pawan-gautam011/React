import React,{useState,useEffect} from 'react'
import axios from 'axios'

const CardContainer = () => {
  
  const [products,setProducts]= useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(res=>setProducts(res.data))
    .catch(err => console.error(err))
  
  })

  return (
    <>
      {products && products.map(item=>(
        <>
        <h1>{item.title}</h1>
        <h2>${item.price}</h2>
        <h3>{item.description}</h3>
        
        </>
      ))}

    </>
  )
}

export default CardContainer