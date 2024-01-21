import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import productService from "../../services/productService";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.css";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product?.products) || [];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    productService
      .getProducts() 
      .then((data) => {
        dispatch(setProducts(data));
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <div className="shop-container">
        <h2>Shop</h2>
        <div className="product-grid">
          {products.length ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
