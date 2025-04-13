import React from "react";
import "./Home.css"; // Import the separate CSS file

export default function Home() {
  return (
    <div className="home-container" id="home">
      <h1 className="home-title">RJ Consultancy Service</h1>
      <p className="home-description">
        Expert Web, App, E-commerce, Digital Marketing & Branding Solutions —
        Tailored for Your Business Success
      </p>
      <a href="#contact" className="home-button">
        Let’s Work Together
      </a>
    </div>
  );
}