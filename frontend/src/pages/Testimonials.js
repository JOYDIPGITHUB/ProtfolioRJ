import React from "react";
import "./Testimonials.css";

const testimonials = [
  { name: "Rahul M.", feedback: "The team was responsive, talented, and delivered my business site ahead of time." },
  { name: "Sneha T.", feedback: "From idea to execution, RJ Consultancy nailed my mobile app perfectly!" },
  { name: "Ankit S.", feedback: "RJ helped me get my e-commerce business online quickly. Super professional!" },
  { name: "Priya D.", feedback: "Their branding and logo service gave my startup a great identity!" }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-text">“{t.feedback}”</p>
            <p className="testimonial-name">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}