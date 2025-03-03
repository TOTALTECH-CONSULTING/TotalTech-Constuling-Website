import React, { useState } from "react";
import "../styles/slider.css";

export default function Slider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateTestimonial = (direction) => {
    if (direction === "prev") {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length,
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  // Get the three testimonials to display (center and two adjacent)
  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [testimonials[prev], testimonials[currentIndex], testimonials[next]];
  };

  return (
    testimonials.length > 0 && (
    <section className="testimonial-section">
      <button
        className="nav-button left"
        onClick={() => updateTestimonial("prev")}
      >
        &lt;
      </button>
      <div className="testimonial-container">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === 1 ? "active" : ""}`}
          >
            <div className="image-container">
              <img src={testimonial.data.image} alt={testimonial.data.name} />
            </div>

            <div className="text-warpper-testiomional">
              <div>
                <h1 className="investor-name">{testimonial.data.name}</h1>
                <h1 className="quote">"{testimonial.data.quote}"</h1>
              </div>
              <div className="testimonial-info">
                <svg
                  width="48"
                  height="2"
                  viewBox="0 0 48 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H48" stroke="#F0840E" strokeWidth="2" />
                </svg>
                <p>{testimonial.data.position}</p>
              </div> 
            </div>
          </div>
        ))}
      </div>
      <button
        className="nav-button right"
        onClick={() => updateTestimonial("next")}
      >
        &gt;
      </button>
    </section>
  )
  );
}
