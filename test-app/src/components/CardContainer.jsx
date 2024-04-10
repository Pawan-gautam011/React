import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const CardContainer = () => {

  const [products, setProducts] = useState([])
  const[limit,setLimit]= useState(8)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))

  })

  const increase = () =>{
    setLimit(limit+4)
  }

  return (
    <div className='container-fluid'>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products && products.slice(0,limit).map(item => (
          <>
            <Card data={item} />
          </>
        ))}

        <div className="d-flex justify-content-center">
        <div className="col-md-4 offset-md-4 my-3">
          <button className=' btn bg-warning' onClick={increase} >Load more</button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default CardContainer;