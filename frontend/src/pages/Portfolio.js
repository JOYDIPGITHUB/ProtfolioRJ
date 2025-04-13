import React from "react";
import "./Portfolio.css";

const projects = [
  {
    name: "E-commerce Website",
    desc: "Built for a local fashion store with inventory and cart integration.",
  },
  {
    name: "Mobile Booking App",
    desc: "A sleek app used by 20,000+ users for hotel and cab bookings.",
  },
  {
    name: "Business Website",
    desc: "SEO and performance optimized landing page for a fintech startup.",
  },
  {
    name: "Digital Campaign Platform",
    desc: "Social media dashboard for managing and analyzing marketing campaigns.",
  }
];

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">Our Work</h2>
      <p className="portfolio-subtitle">A glimpse of our successful projects</p>

      <div className="portfolio-list">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`portfolio-card ${i % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className={`portfolio-image image-${i}`} />
            <div className="portfolio-content">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
