import "./ProductCard.css";
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="product-info">
        <h3 className="products-name">{product.name}</h3>
        <div className="product-card-price">${product.price}</div>
      </div>
    </div>
  );
}
export default ProductCard;
