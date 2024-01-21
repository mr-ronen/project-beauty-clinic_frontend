import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
//import { setProducts } from "../../redux/slices/productSlice";
//import productService from "../../services/productService";

/*Purpose: Where users enter payment and shipping information 
to complete their purchase.
*/

const CheckOut = () => {
  return (
    <>
      <Header />
      <h2>CheckOut</h2>
    </>
  );
};

export default CheckOut;
