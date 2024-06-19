import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the AI Interactive Experience</h2>
      <p>Embark on a journey to help an AI understand what it means to be human.</p>
      <nav>
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/our-research">Our Research</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/news-events">News & Events</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
