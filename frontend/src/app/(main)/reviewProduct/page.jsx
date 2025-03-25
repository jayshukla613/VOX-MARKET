'use client';
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import StarRatings from "react-star-ratings";

const ReviewRating = () => {
  const [rating, setRating] = useState(1); // Default rating value
  const [review, setReview] = useState(""); // Review text
  const [reviews, setReviews] = useState([]); // List of reviews

  const token = typeof window !== 'undefined' ? localStorage.getItem('user-token') : null;

  // Fetch reviews when the component mounts
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/review/reviews`, {
        headers: { 'x-auth-token': token }
  
      })
      .then((response) => {
        setReviews(response.data); // Set reviews in state
      })
      .catch((error) => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, [token]);

  // Handle the change in the star rating
  const onStarClick = (nextValue) => {
    setRating(nextValue); // Update the rating state on star click
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      rating,
      review,
    };

    // Send the new review to the backend
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/review/reviews`, newReview ,{
        headers: {
          'x-auth-token': token
        }}
      )
      .then((response) => {
        setReviews([...reviews, newReview]); // Add the new review to the state
        setRating(1); // Reset the rating to 1
        setReview(""); // Reset the review text
        toast.success("Review submitted successfully!");
      })
      .catch((error) => {
        console.error("There was an error submitting the review!", error);
        toast.error("Error submitting review. Please try again.");
      });
  };

   return (
    <div className="   max-w-md">
      <form onSubmit={handleSubmit}>
      <div className="rounded-lg p-4 ">
        <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
        <StarRatings
          rating={rating}
          starRatedColor="#ffd700"

         
          
          changeRating={onStarClick}
          numberOfStars={5}
          starDimension="30px"
          starSpacing="5px"
        />
        <textarea
          className="w-full border rounded p-2 mt-2"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          name="review"
        />
        <button type="submit" className="mt-2 w-full bg-blue-500 text-white py-2 max-w-md rounded" >
          Submit
        </button>
      </div>
      </form>
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
