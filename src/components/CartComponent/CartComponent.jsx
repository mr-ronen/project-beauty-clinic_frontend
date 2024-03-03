import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation
import "./CartComponent.css";
import {
  fetchCartItems,
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/cartSlice";

export const CartComponent = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const userId = user?.userId;

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItems(userId));
    }
  }, [userId, dispatch]);

  // function to calculate total cost
  const calculateTotalCost = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // function to calculate total items
  const totalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  if (status === "loading") {
    return <div className="cart-container">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="cart-container">
        <p>
          Only logged-in users can access the cart. Please
          <Link to="/login"> log in</Link> to view your cart.
        </p>
      </div>
    );
  }

  if (error) {
    return <div className="cart-container">Error: {error}</div>;
  }

  const handleAddItem = (productId, quantity) => {
    dispatch(addItemToCart({ userId, productId, quantity }));
  };

  const handleRemoveItem = (cartItemId) => {
    dispatch(removeItemFromCart(cartItemId));
  };

  const handleUpdateQuantity = (cartItemId, quantity) => {
    dispatch(updateCartItemQuantity({ cartItemId, quantity }));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.cartItemId}>
                  {/* Assuming you have the product details including name, category, etc. */}
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.cartItemId, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    {item.quantity}
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.cartItemId,
                          Math.max(item.quantity - 1, 0)
                        )
                      }
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.cartItemId)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p>Total Items: {totalItems()}</p>
            <p>Total Cost: ${calculateTotalCost()}</p>
          </div>
        </>
      )}
    </div>
  );
};
