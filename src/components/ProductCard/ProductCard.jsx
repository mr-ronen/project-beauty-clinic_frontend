function ProductCard({ product }) {
    return (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-price">${product.price}</div>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    );
  }
  export default ProductCard;
