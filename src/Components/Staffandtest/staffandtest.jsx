import React, { useState } from 'react'
import './staffandtest.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import profile1 from './profile/kunal.png'
import profile2 from './profile/omkar.png'
import profile3 from './profile/pratik.png'
const Staffandtest = () => {

  const testimonials = [
    {
      name: "Kunal Barsagade",
      image: profile1,
      rating: "⭐⭐⭐⭐⭐",
      title: "Best Tuition for Concept Clarity!",
      feedback:
        "Unperturb Advancement has completely changed the way I understand math and science. The teachers explain every concept so clearly that even the toughest topics feel easy. Thanks to their guidance, I scored excellent marks in my 10th board exams!",
    },
    {
      name: "Pratik Bondre",
      image: profile3,
      rating: "⭐⭐⭐⭐⭐",
      title: "Best Support for Board Exams!",
      feedback:
        "Unperturb Advancement is the best tuition for Class 12 students. The teachers focus on every student individually, ensuring we understand every topic deeply. Their test series and revision strategies helped me perform my best in my board exams!",
    },
    {
      name: "Omkar Padman",
      image: profile2,
      rating: "⭐⭐⭐⭐⭐",
      title: "Perfect Guidance for 11th!",
      feedback:
        "Transitioning from Class 10 to 11 was tough, but Unperturb Advancement made it so much easier! The detailed explanations, regular tests, and doubt-solving sessions helped me stay ahead in my studies. I feel much more confident now.",
    },
   
  ];

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div >


<div>
      <h4 className="text-center mb-4 mt-4">
        <strong>Testimonials</strong>
      </h4>
      <div
        id="carouselExampleCaptions"
        className="carousel slide test-main-div bg-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="image-test-profile">
                <img
                  src={testimonial.image}
                  className="d-block text-profile"
                  alt={`Slide ${index + 1}`}
                />
              </div>
              <div className="w-100 d-flex justify-content-center">
                <div className="test-details">
                  <h5 className="text-light">{testimonial.name}</h5>
                  <p className="text-center text-white testimonials-details">
                    <strong>
                      {testimonial.rating} <br /> {testimonial.title}
                    </strong>
                    <br />
                    <br />
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


<div className='write-review-div d-flex'>

<div className='write-review-sub'>
 <strong className='opacity-75'>{submitted ? "Your Review is Submitted" : "Write a Review"}</strong> 
</div>
{!submitted && (
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="form-control mb-1"
            required
          />
          <input
            type="text"
            placeholder="Enter Your Review"
            className="form-control mb-1"
            required
          />
          <select className="form-control" required>
            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐">⭐</option>
          </select>
          <button className="btn btn-primary w-100 mt-1" type="submit">
            <strong>Submit</strong>
          </button>
        </form>
      )}

</div>




    </div>
  )
}

export default Staffandtest
