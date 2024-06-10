import axios from 'axios';

const API_URL = `https://fakestoreapi.com/products`;

const getProduct = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    }
    catch (error) {
        console.log('Error fetching data:', error)
        throw error
    }
}

export { getProduct }
