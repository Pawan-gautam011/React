import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [product,setProduct] = useState({})
    const params = useParams()
    const id = params.productId


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id])
  return (
    <>
    
    <div className="container my-5">

        <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-4">
                <img src={product.image} alt= {product.title} width={'300'}/>
            </div>
            <div className="col-md-6">
                <h5>{product.title}</h5>
                <h5>${product.price}</h5>
                <p>{product.description}</p>
                <p> <smalll>Category:{product.category} </smalll> </p>
            </div>

        </div>
    </div>
    </>
  )
}

export default ProductDetails