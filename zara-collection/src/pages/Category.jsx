import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Category() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter(
          (product) => product.category === category
        );

        setProducts(filtered);
      })
      .catch((error) => console.error(error));
  }, [category]);

  const title = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Price range for each category
  const priceRanges = {
    "short-kurti": "₹300 – ₹350",
    "long-kurti": "₹300 – ₹350",
    "layer-gown": "₹400 – ₹500",
    "farsi-suit": "₹800 – ₹1000",
  };

  const price = priceRanges[category];

  return (
    <section className="category-page">
      <div className="category-header">
        <Link to="/">← Back to Home</Link>

        <p className="section-label">
          ZARA COLLECTION
          <br />
          <br />
          For customization dm on whatsapp 💌
        </p>

        <h1>{title}</h1>

        {price && (
          <div className="price-range">
            <span>Price Range</span>
            <strong>{price}</strong>
          </div>
        )}

        <p>
          Choose your favourite design and fabric, tell us your size. 💕
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="no-products">
          Products will be added soon. 🌸
        </p>
      )}
    </section>
  );
}

export default Category;