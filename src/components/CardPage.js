import React from 'react';
import { useParams } from 'react-router-dom';

const CardPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Card Information</h2>
      <p>This is the page for card with ID: {id}</p>
      {/* Add any additional logic or data fetching here */}
    </div>
  );
};

export default CardPage;
