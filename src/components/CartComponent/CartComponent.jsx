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
  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItems(userId));
    }
  }, [userId, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="cart-container">
        <p>
          Only logged-in users can access the cart. Please
          <Link to="/LogIn"> log in</Link> to view your cart.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cart-container">
        <div>Error: {error}</div>
      </div>
    );
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
        <div>
          {items.map((item) => (
            <div className="cart-item" key={item.cartItemId}>
              <p>Product ID: {item.productId}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <button
                onClick={() =>
                  handleUpdateQuantity(item.cartItemId, item.quantity + 1)
                }
              >
                +
              </button>
              <button
                onClick={
                  () =>
                    handleUpdateQuantity(
                      item.cartItemId,
                      Math.max(item.quantity - 1, 0)
                    ) // Ensures quantity does not go below 0
                }
              >
                -
              </button>
              <button onClick={() => handleRemoveItem(item.cartItemId)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
