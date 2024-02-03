import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import "./ShopManagement.css";

const ShopManagement = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="shop-management">
        <h1 className="title">Shop Management</h1>
        <table className="product-table">
          <thead>
            <tr>
              <th className="th">Image</th>
              <th className="th">Name</th>
              <th className="th">Cost</th>
              <th className="th">Quantity</th>
              <th className="th">Discount Price</th>
              <th className="th">Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-table img"
                  />
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.stockQuantity}</td>
                <td>${product.discountPrice}</td>
                <td>
                  <button className="edit-btn">Edit</button>
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
