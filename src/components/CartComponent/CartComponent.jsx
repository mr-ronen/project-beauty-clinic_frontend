import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartComponent.css";
import {
  fetchCartItems,
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/cartSlice";
import { fetchProducts } from "../../redux/slices/productSlice";

export const CartComponent = () => {
  const dispatch = useDispatch();
  const {
    items: cartItems,
    status,
    error,
  } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.product);
  const user = useSelector((state) => state.auth.user);
  const userId = user?.userId;

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItems(userId));
    }
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [userId, dispatch, products.length]);

  // function to calculate total cost
  const calculateTotalCost = () => {
    const totalCost = cartItems.reduce((total, cartItem) => {
      const product = products.find((p) => p.productId === cartItem.productId);
      return total + (product?.price || 0) * cartItem.quantity;
    }, 0);
    return parseFloat(totalCost.toFixed(2));
  };

  // function to calculate total items
  const totalItems = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
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
    return <div className="cart-container">Error: {error.message}</div>;
  }

  const handleAddItem = (productId, quantity) => {
    dispatch(addItemToCart({ userId, productId, quantity }))
      .unwrap()
      .then(() => {
        // Handle the success.
        console.log("Item added to cart successfully");
        // Optionally, update the UI or state here if needed.
      })
      .catch((error) => {
        // Handle any errors.
        console.error("Failed to add item to cart:", error);
        alert("Failed to add item to cart. Please try again.");
      });
  };

  const handleRemoveItem = (cartItemId) => {
    dispatch(removeItemFromCart(cartItemId))
      .unwrap()
      .then(() => {
        // Handle the success.
        console.log("Item removed from cart successfully");
        // Optionally, update the UI or state here if needed.
      })
      .catch((error) => {
        // Handle any errors.
        console.error("Failed to remove item from cart:", error);
        alert("Failed to remove item from cart. Please try again.");
      });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
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
              {cartItems.map((cartItem) => {
                const product = products.find(
                  (p) => p.productId === cartItem.productId
                );
                if (!product) return null; // Or some placeholder if product not found
                return (
                  <tr key={cartItem.cartItemId}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>{cartItem.quantity}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveItem(cartItem.cartItemId)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-summary">
            <p>Total Items: {totalItems()}</p>
            <p>Total Cost: ${calculateTotalCost()}</p>
            <h4>
              .העגלה היא שירות שהוספנו כדי שהלקוחות שלו יוכלו לדעת מה הם רוצים
              לקנות לפני האגעה לסניף  <br/>.לכל שאלה אנו תמיד פנויים לעזור
              054-5544455{" "}
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

/*  const handleUpdateQuantity = (cartItemId, newQuantity) => {
    dispatch(updateCartItemQuantity({ cartItemId, quantity: newQuantity }))
      .unwrap()
      .then(() => {
        // Handle the success.
        console.log("Item quantity updated successfully");
        // Optionally, update the UI or state here if needed.
      })
      .catch((error) => {
        // Handle any errors.
        console.error("Failed to update item quantity:", error);
        alert("Failed to update item quantity. Please try again.");
      });
  };*/

/*<td> 
  <button onClick={() =>handleUpdateQuantity(cartItem.cartItemId,cartItem.quantity + 1)}>+</button>
  {cartItem.quantity}
  <button onClick={() =>handleUpdateQuantity(cartItem.cartItemId,Math.max(cartItem.quantity - 1, 0))}> -</button>
  </td>
   */
