import React, { useEffect, useState } from 'react';
import { getProduct } from './axiosTest';
import { RingLoader } from 'react-spinners';

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getapiProduct = async () => {
    setLoading(true);
    try {
      const res = await getProduct();
      setProducts(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getapiProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RingLoader color="#36d7b7" />
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductComponent;
