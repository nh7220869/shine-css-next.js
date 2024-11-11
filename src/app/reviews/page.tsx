"use client"
import { useState } from 'react';
import "../reviews/reviews.css"

interface Review {
  name: string;
  location: string;
  review: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Ayesha Khan',
      location: 'Karachi, Pakistan',
      review: 'Shine Shine made my house sparkle! Their team was punctual, professional, and detailed. I’m so impressed with their work, and my house has never looked cleaner!',
    },
    {
      name: 'Imran Ali',
      location: 'Karachi, Pakistan',
      review: 'I hired Shine Shine for a post-renovation clean-up, and they did an amazing job. They left no corner untouched, and the whole place smells fresh and new. Highly recommended!',
    }, 
    {
      name: 'Fatima Ahmed',
      location: 'Karachi, Pakistan',
      review: 'I’ve used Shine Shine for regular cleaning services for months, and I’m always happy with the results. Their team is friendly, reliable, and always does a thorough job. Worth every penny!',
    },
    {
      name: 'Hassan Raza',
      location: 'Karachi, Pakistan',
      review: 'Shine Shine exceeded my expectations! They cleaned my office space quickly and efficiently, and now it feels so much more inviting. Will definitely book them again!',
    },
  ]);

  const [newReview, setNewReview] = useState<Review>({
    name: '',
    location: '',
    review: '',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', location: '', review: '' });
    setSuccessMessage('Review Submitted Successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="title">What Our Customers Say</h2>

        <div className="reviews">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-text">{review.review}</p>
              <div className="reviewer-name">{review.name}</div> 
              <div className="reviewer-location">{review.location}</div>
            
            </div>
          ))}
        </div>

        <div className="review-form">
          <h3 className="form-title">Share Your Experience</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={newReview.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="review">Your Review</label>
              <textarea
                id="review"
                name="review"
                value={newReview.review}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            </div>
            <div className="submit-btn">
              <button type="submit">Submit Review</button>
            </div>
          </form>

          {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
