import React from 'react';
import { Link } from 'react-router-dom';

const OurResearch = () => {
  return (
    <div>
      <h2>Our Research</h2>
      <p>Explore our cutting-edge research projects aimed at understanding human motivations and behaviors.</p>
      <p>Our team employs a variety of methodologies, from surveys and experiments to advanced data analytics, to uncover the factors that drive human actions and decisions.</p>
      <p>Discover our latest findings and how they contribute to fields such as psychology, sociology, and behavioral economics.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default OurResearch;
