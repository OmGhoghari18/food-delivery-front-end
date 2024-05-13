import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container" id="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Email: contact@foodie.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main Street, City, India</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
