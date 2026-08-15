function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-top">
        <div className="review-avatar">
          {review.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h4>{review.name}</h4>
          <div className="review-stars">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>
        </div>
      </div>

      <p>{review.comment}</p>

      {review.image && (
        <img
          src={review.image}
          alt={`${review.name}'s review`}
          className="review-image"
        />
      )}

      <small>{review.date}</small>
    </div>
  );
}

export default ReviewCard;