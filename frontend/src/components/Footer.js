import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} RJ Consultancy. All rights reserved.</p>
      <div className="footer-contacts">
        <a href="mailto:rjonlineservic2024@gmail.com">
          <FaEnvelope className="footer-icon" />
          rjonlineservic2024@gmail.com
        </a>
        <a href="https://wa.me/7439504831" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="footer-icon" />
          +91 7439504831
        </a>
      </div>
    </footer>
  );
}