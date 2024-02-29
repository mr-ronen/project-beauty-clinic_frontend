import apiClient from "./apiClient";

//get products
const getProducts = async () => {
  try {
    const response = await apiClient.get("/api/Product");
    console.log("Products:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
// Add a new product
const addProduct = async (productData) => {
  const response = await apiClient.post("/api/Product", productData);
  return response.data;
};

// Update a product
const updateProduct = async (productId, updatedData) => {
  const response = await apiClient.put(
    `/api/Product/${productId}`,
    updatedData
  );
  return response.data;
};

// Delete a product
const deleteProduct = async (productId) => {
  const response = await apiClient.delete(`/api/Product/${productId}`);
  return response.data;
};

const fetchProductById = async (productId) => {
  const response = await apiClient.get(`/api/Product/${productId}`);
  return response.data;
};
const searchProducts = async (query) => {
  try {
    const response = await apiClient.get(`/api/Product/search?query=${query}`);
    console.log("Search Results:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

const productService = {
  fetchProductById,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};

export default productService;
