import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {register, handleSubmit ,reset, } = useForm()





  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const loadMore = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts([...products, ...data]));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const viewDetails = (product) => {
    setSelectedProduct(product);
  };
  const Edit = (product) => {
    setSelectedProduct(product);

    fetch('https://fakestoreapi.com/products/1',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

const onSubmit =(data)=>{
    
    fetch("https://fakestoreapi.com/products",{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-type': "application/json",
        }
    })

    .then(response =>response.json())
    .then(newProduct =>{
        setProducts([...products, newProduct]);
        reset()

    });
    

};


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <div className="flex place-content-center">

            <p className="text-sm"> Rating: {product.rating && product.rating.rate }</p>
            
             
            </div>

            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => viewDetails(product)}
            >
              View Details
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
              onClick={() => Edit(product)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-bold mb-4">${selectedProduct.price}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text"  name="title" placeholder="titel" className="border rounded p-2"
      {...register('title',{ required: true})} />


      <input type="text"  name="description" placeholder="Description" className="border rounded p-2"
      {...register('description',{ required: true})} />



      <input type="number"  name="price" placeholder="price" className="border rounded p-2"
      {...register('price',{ required: true})} />


      <input type="text"  name="Category" placeholder="category" className="border rounded p-2"
      {...register('category',{ required: true})} />

      <input type="text"  name="image" placeholder="image" className="border rounded p-2"
      {...register('image',{ required: true})} />

      

<div className="flex justify-end">
    <button type="button" onClick={closeModal}>
      Cancel
    </button>
<button type="submit">
Create Product
</button>
</div>
</form>
    </div>
  );
};





ProductCard.propTypes = {
  product: PropTypes.string.isRequired,
};


export default ProductCard;