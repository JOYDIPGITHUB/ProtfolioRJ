import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // Make sure this file is present

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://protfoliorj.onrender.com/contact", form);
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send!");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Image Section */}
        <div className="contact-image"></div>

        {/* Form Section */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
