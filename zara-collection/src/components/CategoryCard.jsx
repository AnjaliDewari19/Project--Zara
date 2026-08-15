import { Link } from "react-router-dom";

function CategoryCard({ title, description, image, category }) {
  return (
    <Link to={`/category/${category}`} className="category-card">
      <img src={image} alt={title} />

      <div className="category-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Explore Collection →</span>
      </div>
    </Link>
  );
}

export default CategoryCard;