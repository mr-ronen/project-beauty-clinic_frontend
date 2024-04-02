import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import "./ProductPage.css";
import Header from "../../components/Header/Header";
import { addItemToCart } from '../../redux/slices/cartSlice';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products, loading, error } = useSelector((state) => state.product);
  const user = useSelector((state) => state.auth.user); // Assuming you store user info here
  const product = products.find((p) => p.productId === Number(productId));
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleAddToCart = () => {
    const userId = user?.userId; 
    if (!userId) {
      alert("You must be logged in to add items to the cart.");
      return;
    }
    if (product) {
      dispatch(
        addItemToCart({
          userId,
          productId: product.productId,
          quantity: 1, 
        })
      );
      setShowPopup(true); // Show popup
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div className="product-page">
      <Header />
      <div className="product-container">
        <div className="product-image-container">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-page-image"
          />
        </div>
        <div className="product-info-a">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-pricing">
            <p className="product-price">Price: ${product.price.toFixed(2)}</p>
            {product.discountPrice && (
              <p className="product-discount-price">
                Discount: ${product.discountPrice.toFixed(2)}
              </p>
            )}
          </div>
          <p className="product-stock">In Stock: {product.stockQuantity}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {showPopup && <div className="add-to-cart-popup">Added to Cart!</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
