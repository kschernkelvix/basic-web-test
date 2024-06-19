import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to [Corporation Name], where we delve into the intricacies of human motivations. Our mission is to uncover the driving forces behind human behavior through rigorous research and innovative methodologies.</p>
      <p>Founded in [Year], we have been at the forefront of psychological and behavioral research, contributing valuable insights to the field and partnering with leading institutions worldwide.</p>
      <p>Our vision is to create a comprehensive understanding of what motivates people, helping to inform better practices in education, healthcare, business, and beyond.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default AboutUs;
