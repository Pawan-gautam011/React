import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const CardContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))

  })

  return (
    <div className='container-fluid'>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products && products.map(item => (
          <>
            <Card data={item} />
          </>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;