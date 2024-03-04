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
       
        <Link to="/shop" className="continue-shopping-btn">
          Continue Shopping
        </Link>
        {/* summary box, promotions, or a checkout button */}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
