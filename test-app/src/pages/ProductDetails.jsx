import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { useForm, SubmitHandler } from "react-hook-form"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';


const ProductDetails = () => {
    const [product,setProduct] = useState({})
    const params = useParams()
    const id = params.productId


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id])

    //handling add to cart button

    const addToCart = () => {
        //fetch items from cart

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        const productData = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            rating: product.rating,
            category: product.category,
            quantity:1
        }

        //check if item exist in localstorage or not

        const existingItem =cartItems.find(item=>item.id===product.id)
        
        if(existingItem) {
            toast.error('Already added to cart')
        }
        else{
            cartItems.push(productData)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productData.title}is added to cart`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }

    
    }

  return (
    <>
    <Helmet>
        <title>{product.title}</title>

    </Helmet>

    <ToastContainer theme='colored' position='top-center'/>
    
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
                <p>{product.rating && product.rating.rate}</p>

                <div className="my-3">
                    <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default ProductDetails