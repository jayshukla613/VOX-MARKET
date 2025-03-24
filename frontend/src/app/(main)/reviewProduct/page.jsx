import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const ReviewRating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    if (review.trim() && rating > 0) {
      setReviews([...reviews, { rating, review }]);
      setReview("");
      setRating(0);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
        <StarRatings
          rating={rating}
          starRatedColor="#ffd700"
          changeRating={handleRatingChange}
          numberOfStars={5}
          starDimension="30px"
          starSpacing="5px"
        />
        <textarea
          className="w-full border rounded p-2 mt-2"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <div key={index} className="border rounded-lg p-4 shadow mt-2">
              <StarRatings
                rating={r.rating}
                starRatedColor="#ffd700"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="5px"
              />
              <p className="mt-1">{r.review}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewRating;
