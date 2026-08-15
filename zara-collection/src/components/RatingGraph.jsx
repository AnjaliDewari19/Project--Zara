function RatingGraph({ reviews }) {
  const total = reviews.length;

  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((review) => review.rating === star).length
  }));

  const average =
    total > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) / total
        ).toFixed(1)
      : "0.0";

  return (
    <div className="rating-section">
      <div className="rating-summary">
        <div className="average-rating">
          <strong>{average}</strong>
          <div className="big-stars">★★★★★</div>
          <p>{total} customer reviews</p>
        </div>

        <div className="rating-bars">
          {counts.map((item) => {
            const percentage =
              total > 0 ? (item.count / total) * 100 : 0;

            return (
              <div className="rating-row" key={item.star}>
                <span>{item.star} ★</span>

                <div className="rating-bar">
                  <div
                    className="rating-fill"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <span>{item.count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RatingGraph;