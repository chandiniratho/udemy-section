import React from "react";
import testimonials from "../data/testimonials.json";
import "../assets/styles.css";

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>{testimonials.heading}</h2>
      <div className="testimonials-container">
        {testimonials.contents.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            {/* Testimonial Text */}
            <p dangerouslySetInnerHTML={{ __html: testimonial.description }}></p>

            {/* Author Info (Image + Small Text) */}
            <div className="testimonial-author">
              <img src={testimonial.image.url} alt="author" />
              <p className="testimonial-subText">{testimonial.subText}</p>
            </div>

            {/* CTA Link */}
            <a href={testimonial.contentUrl} target="_blank" rel="noopener noreferrer">
              {testimonial.contentUrlText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
