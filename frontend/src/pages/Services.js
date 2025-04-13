import React from "react";
import "./Services.css";

const services = [
  { icon: "🖥️", title: "Website Development", desc: "Responsive and SEO-optimized websites to represent your brand online." },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform and native mobile apps for iOS and Android platforms." },
  { icon: "🛒", title: "E-commerce Solutions", desc: "Custom e-commerce websites with secure payment integration." },
  { icon: "💾", title: "Software Development", desc: "Custom software and backend solutions tailored for enterprise needs." },
  { icon: "📈", title: "Digital Marketing", desc: "SEO, Social Media, Ads, and complete digital growth strategy." },
  { icon: "🎨", title: "Logo & Branding", desc: "Unique brand identities with professional visuals." }
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div>
        <h2>Our Services</h2>
        <p>We help startups and enterprises succeed digitally.</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}