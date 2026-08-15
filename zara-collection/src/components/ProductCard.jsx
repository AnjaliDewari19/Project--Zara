import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="sizes">
          {product.sizes.map((size) => (
            <span key={size}>{size}</span>
          ))}
        </div>
        
        <Link to={`/product/${product.id}`} className="view-button">
          View Design
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;