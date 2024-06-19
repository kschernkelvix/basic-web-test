import React from 'react';
import { Link } from 'react-router-dom';

const NewsEvents = () => {
  return (
    <div>
      <h2>News & Events</h2>
      <p>Stay updated with the latest news and upcoming events from our organization.</p>
      <p>Join us for conferences, seminars, and workshops where we share our research findings and collaborate with other experts in the field.</p>
      <p>Check out our press releases and media coverage to learn more about our impact.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NewsEvents;
