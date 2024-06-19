import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div>
      <h2>Our Team</h2>
      <p>Meet the dedicated professionals behind our research.</p>
      <p>Our team comprises experts from diverse fields, including psychology, sociology, data science, and more.</p>
      <p>Each member brings a unique perspective and skill set, contributing to our collective mission to understand human motivations.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Team;
