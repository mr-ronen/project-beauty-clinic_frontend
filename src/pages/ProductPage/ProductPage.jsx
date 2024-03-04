import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productSlice';
import './ProductPage.css';
import Header from "../../components/Header/Header";


const ProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products, loading, error } = useSelector((state) => state.product);
  const product = products.find((p) => p.productId === Number(productId));

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    console.log('Add to cart not implemented yet'); // Placeholder
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div className="product-page">
      <Header />
      <div className="product-container">
        <div className="product-image-container">
          <img src={product.imageUrl} alt={product.name} className="product-page-image" />
        </div>
        <div className="product-info-a">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-pricing">
            <p className="product-price">Price: ${product.price.toFixed(2)}</p>
            {product.discountPrice && (
              <p className="product-discount-price">Discount: ${product.discountPrice.toFixed(2)}</p>
            )}
          </div>
          <p className="product-stock">In Stock: {product.stockQuantity}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;