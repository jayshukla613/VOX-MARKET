'use client'
import { useState, useEffect } from "react";
import axios from "axios";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  // Fetch reviews from the backend
  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment || !rating) return alert("All fields are required!");

    const newReview = { name, comment, rating };
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/reviews", newReview);
      setReviews([res.data, ...reviews]); // Add new review to list
      setName("");
      setComment("");
      setRating(5);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Leave a Review</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border rounded mb-2"
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Display Reviews */}
      <div>
        <h3 className="text-lg font-semibold">Reviews:</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review._id} className="border-b p-2">
                <strong>{review.name}:</strong> {review.comment} <br />
                <span>⭐ {review.rating}/5</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewComponent;
