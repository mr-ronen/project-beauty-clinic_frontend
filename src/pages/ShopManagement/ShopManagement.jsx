import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  updateProduct,
  deleteProduct,
} from "../../redux/slices/productSlice";
import "./ShopManagement.css";
import ProductForm from "./ProductForm";

const ShopManagement = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [editMode, setEditMode] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    productId: null,
    name: "",
    imageUrl: "",
    price: "",
    stockQuantity: "",
    discountPrice: "",
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, products]);

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setEditMode(true);
  };

  const handleUpdate = (productData) => {
    dispatch(
      updateProduct({
        ...productData,
        id: currentProduct.productId,
        productData,
      })
    );
    setEditMode(false); // Exit edit mode after update
  };

  // Function to toggle the form visibility
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };
  const handleDelete = (productId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      dispatch(deleteProduct(productId))
        .then(() => {
          alert("Product successfully deleted.");
        })
        .catch((error) => {
          console.error("Deletion failed:", error);
          alert("Deletion failed.");
        });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className="shop-management">
        <h1 className="title">Shop Management</h1>
        <button onClick={toggleAddForm} className="add-product-btn">
          Add Product
        </button>
        {showAddForm && (
          <ProductForm
            product={{}} // Pass an empty object for a new product
            isEditing={false}
            onUpdate={() => {}} 
          />
        )}
        {editMode && (
          <ProductForm
            product={currentProduct}
            onUpdate={handleUpdate}
            isEditing={editMode}
          />
        )}
        <table className="product-table">
          <thead>
            <tr>
              <th className="th">Image</th>
              <th className="th">Name</th>
              <th className="th">Cost</th>
              <th className="th">Quantity</th>
              <th className="th">Discount Price</th>
              <th className="th">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product?.imageUrl}
                    alt={product?.name}
                    className="product-table img"
                  />
                </td>
                <td>{product?.name}</td>
                <td>${product?.price}</td>
                <td>{product?.stockQuantity}</td>
                <td>${product?.discountPrice}</td>
                <td>
                  <button
                    onClick={() => handleEditClick(product)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.productId)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShopManagement;
