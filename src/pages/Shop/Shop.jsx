import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Shop.css";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product?.products) || [];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <div className="heroc">{}</div>
      <SearchBar />

      <div className="shop-container">
        <div className="product-grid">
          {products.length ? (
            products.map((product) => (
              <Link to={`/product/${product.productId}`} key={product.productId} className="product-link">
              <ProductCard product={product} />
            </Link>
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
