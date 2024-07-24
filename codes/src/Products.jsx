import { useEffect, useState } from "react"


const Products = () => {

    const [records, setRecords] = useState([])

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err=> console.error(err))


    },[])
  return (
    <>
   <h1>Products Section</h1>
   <div> {records.map((item)=>(
    <div key={item.id}> 
        <h2>{item.description}</h2>
        <p>{item.price}</p>
        <img src={item.image} alt=""
        style={{display: 'flex', height:'100px'}}
        />
    </div>
   ))}

   </div>
   </>
  )
}

export default Products