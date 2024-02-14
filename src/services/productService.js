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
    updatedData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};


// Delete a product
const deleteProduct = async (productId) => {
  const response = await apiClient.delete(`/api/Product/${productId}`);
  return response.data;
};
const productService = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
