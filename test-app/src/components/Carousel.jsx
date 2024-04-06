import React from 'react'

const Carousel = () => {
  return (
    <>
    
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/plain.avif" className="d-block w-100" alt="plain" title='plain'/>
    </div>
    <div className="carousel-item">
      <img src="/images/msi.avif" className="d-block w-100" alt="msi" title='msi'/>
    </div>
    <div className="carousel-item">
      <img src="/images/black Friday.avif" className="d-block w-100" alt="black Friday" title='black Friday'/>
    </div>
  </div>
  <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}

export default Carousel