import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get('/api/Product');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default { getProducts };