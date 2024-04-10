import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => {

  
  return (
    <>
   
    <div className="col">
    <div className="card">
      <img src= {props.data.image} className="card-img-top" alt="{props.data.image} "/>
      <div className="card-body">
        <h5 className="card-title object-fit-cover">{props.data.title}</h5>
        <h5>{props.data.price} </h5>
        <Link to='#' className='btn btn-success'>View Details</Link>
       
      </div>
    </div>
  </div>
 
    </>
  )
}
export default Card