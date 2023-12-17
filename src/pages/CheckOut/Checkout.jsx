import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
// Assume you have a service to fetch products
import productService from "../../services/productService";

/*Purpose: Where users enter payment and shipping information 
to complete their purchase.

Redux Toolkit Usage: Important for managing checkout processes,
 such as submitting orders and handling payment information 
 (though sensitive payment data should be handled securely and  
 possibly offloaded to a third-party service).
*/

const CheckOut = () => {
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
      <h2>CheckOut</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </>
  );
};

export default CheckOut;
