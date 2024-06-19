import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div>
      <h2>Careers</h2>
      <p>Join our team and contribute to cutting-edge research on human motivations.</p>
      <p>Explore our current job openings and internship opportunities.</p>
      <p>Learn more about our workplace culture, benefits, and the application process.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Careers;
