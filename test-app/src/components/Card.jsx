import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className="row row-cols-1 row-cols-md-4 g-4">
    <div className="col">
    <div className="card">
      <img src="/images/collection.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Link to='#' className='btn btn-success'>View Details</Link>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/headphone.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Link to='#' className='btn btn-success'>View Details</Link>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/watch.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Link to='#' className='btn btn-success'>View Details</Link>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/keyboard.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Link to='#' className='btn btn-success'>View Details</Link>
       
      </div>
    </div>
  </div>
</div>
    </div>

    </>
  )
}
