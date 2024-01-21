import axios from "axios";
import apiClient from "./apiClient";

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

export default { getProducts };
