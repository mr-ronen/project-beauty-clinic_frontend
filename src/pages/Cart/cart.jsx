import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import productService from "../../services/productService"; //demo  
import { CartComponent } from "../../components/CartComponent/CartComponent";
import "./Cart.css";


const Cart = () => {
  return (
    <div className="cart-page">
      
      <Header /> 
      <h1 className="cart-page-title">Shopping Cart</h1>
      <CartComponent />

      {/* additional elements  summary box, promotions, or continue shopping button */}

      <div className="cart-additional">
        <button className="continue-shopping-btn">Continue Shopping</button>
        
        {/* If you have a summary or checkout component, it can be placed here */}
        {/* <SummaryBox /> */}
        {/* <CheckoutButton /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;