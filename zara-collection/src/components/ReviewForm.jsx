import { useState } from "react";

function ReviewForm({ productId }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      "Thank you! Your review has been submitted. 💕"
    );

    console.log({
      productId,
      ...form
    });

    setForm({
      name: "",
      email: "",
      rating: 5,
      comment: ""
    });
  }

  return (
    <div className="review-form-container">
      <h3>Share Your Experience 💕</h3>

      <p>
        Your email is kept private and is only used to identify your review.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Gmail"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Your Rating</label>

        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
        >
          <option value="5">★★★★★ - Excellent</option>
          <option value="4">★★★★☆ - Very Good</option>
          <option value="3">★★★☆☆ - Good</option>
          <option value="2">★★☆☆☆ - Average</option>
          <option value="1">★☆☆☆☆ - Poor</option>
        </select>

        <textarea
          name="comment"
          placeholder="Write your review..."
          value={form.comment}
          onChange={handleChange}
          rows="5"
          required
        />

        <label className="image-upload">
          📷 Add your photo
          <input type="file" accept="image/*" />
        </label>

        <button type="submit" className="submit-review">
          Submit Review
        </button>
      </form>

      {message && <div className="success-message">{message}</div>}
    </div>
  );
}

export default ReviewForm;