import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Whether you have a question about our research, want to collaborate, or are interested in joining our team, feel free to get in touch.</p>
      <p>Email: contact@corporationname.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Research Blvd, Portland, OR 97201</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ContactUs;
