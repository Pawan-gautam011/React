import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import { Card } from '../components/Card'



const Products = () => {

  const [products, setProducts] = useState([])
  const[loading,setLoading]= useState(true)

  useEffect(()=>{
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`)
        setProducts(response.data)
        setLoading(false)
      }
      catch (error) {
              console.error(error.message)
            }
    }

    setTimeout(()=>{
      fetchProduct()
    },3000)
    
  },[])

  return (
    <>

    {loading ?(
      <div className='d-flex justify-content-center allign-item-center' style={{height:'50vh'}} >
        <div className="coml-md-3">
          
   <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#ea00ff', '#ff3300', '#ff8000', '#b3ff00', '#0011ff']}
    />
        
        </div>

      </div>
    ):(
      <div className='container-fluid'>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products && products.map(item => (
          <>
            <Card data={item} />
          </>
        ))}

        

      </div>
    </div>
    )}
   
    </>
  )
}

export default Products