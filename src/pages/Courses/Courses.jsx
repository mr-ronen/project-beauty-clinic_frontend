import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import Footer from "../../components/Footer/Footer";
// Assume you have a service to fetch products
import productService from "../../services/productService";


const Courses = () => {
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
      <h2>Courses</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
      <Footer />

    </>
  );
};

export default Courses;
