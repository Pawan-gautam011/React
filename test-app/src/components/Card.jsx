import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => {

  const {title,price,image,id} = props.data

  return (
    <>
   
    <div className="col">
    <div className="card">
      <img src= {image} className="card-img-top" alt="{props.data.image} "/>
      <div className="card-body">
        <h5 className="card-title object-fit-cover">{title.slice(0,20)}....</h5>
        <h5>${price} </h5>
        <Link to='#' className='btn btn-success'>View Details</Link>
       
      </div>
    </div>
  </div>
 
    </>
  )
}
export default Card