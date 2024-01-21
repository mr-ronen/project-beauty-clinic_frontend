import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import productService from "../../services/productService";//demo

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product?.products) || []; //in empty array 

  useEffect(() => {
    if (typeof productService.getProducts === 'function') {
      productService.getProducts().then((data) => {
        dispatch(setProducts(data));
      });
    } else {
      console.error('productService.getProducts is not a function');
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <h2>Cart</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </>
  );
};

export default Cart;
