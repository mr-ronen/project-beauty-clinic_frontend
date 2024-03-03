import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CartComponent } from "../../components/CartComponent/CartComponent";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart-page">
      <Header />
      <h1 className="cart-page-title">Shopping Cart</h1>
      <CartComponent />
      <div className="cart-additional">
        {/* This button could link back to the products page or wherever you see fit */}
        <Link to="/shop" className="continue-shopping-btn">
          Continue Shopping
        </Link>
        {/* Implement any additional elements here, such as a summary box, promotions, or a checkout button */}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
