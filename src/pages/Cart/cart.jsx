import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import productService from "../../services/productService"; //demo

const Cart = () => {
  return (
    <>
      <Header />
      <h2>Cart</h2>
      <div></div>
    </>
  );
};

export default Cart;
