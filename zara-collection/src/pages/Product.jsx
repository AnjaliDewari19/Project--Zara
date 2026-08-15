import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RatingGraph from "../components/RatingGraph";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/data/products.json").then((response) => response.json()),
      fetch("/data/reviews.json").then((response) => response.json())
    ])
      .then(([products, reviewData]) => {
        const selectedProduct = products.find(
          (item) => item.id === id
        );

        const selectedReviews = reviewData.filter(
          (review) => review.productId === id
        );

        setProduct(selectedProduct);
        setReviews(selectedReviews);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello ZARA COLLECTION! 

I am interested in:
${product.image}
${product.name}
${product.description}


My preferred size is: ______

Please confirm availability. Thank you!! `
  );

  return (
    <section className="product-page">
      <Link
        to={`/category/${product.category}`}
        className="back-link"
      >
        ← Back to Collection
      </Link>
    
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <p className="section-label">ZARA COLLECTION</p>

          <h1>{product.name}</h1>

          <p className="product-description">
            {product.description}
          </p>

          <h3>Select Your Size</h3>

          <div className="detail-sizes">
            {product.sizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>

          <div className="order-note">
            💕 Tell us your favourite size when ordering.
          </div>

          <a
            href={`https://wa.me/919810425269?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-order"
          >
            💬 Order on WhatsApp
          </a>

          <a
            href="https://www.google.com/maps/place/Modern+Convent+Junior+High+School/@28.6307172,77.3450687,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5bd028480cb:0xfcf47af126f099db!8m2!3d28.6307172!4d77.3450687!16s%2Fg%2F11h3wjtc2j?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="visit-product"
          >
            📍 Visit Store to Explore
          </a>

          <a
            href="https://www.instagram.com/zara2006744/"
            target="_blank"
            rel="noreferrer"
            className="visit-product"
          >
            💌 Follow US
          </a>
        </div>
      </div>

      <div className="reviews-section">
        <div className="section-heading">
          <p className="section-label">CUSTOMER REVIEWS</p>
          <h2>What Customers Think</h2>
        </div>

        <RatingGraph reviews={reviews} />

        <div className="review-list">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <p className="no-reviews">
              No reviews yet. Be the first to review this design! 💕
            </p>
          )}
        </div>

        <ReviewForm productId={product.id} />
      </div>
    </section>
  );
}

export default Product;