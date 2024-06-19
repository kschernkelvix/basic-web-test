// src/components/Quest.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quest = () => {
  const [quest, setQuest] = useState(null);

  const fetchQuest = () => {
    // Placeholder for fetching quest data from an API or database
    setQuest({
      title: "First Quest",
      description: "Visit Powell’s Books and find the book on human motivation.",
      location: "Powell’s City of Books, Portland, OR",
    });
  };

  return (
    <div>
      <h2>Current Quest</h2>
      <button onClick={fetchQuest}>Get Quest</button>
      {quest && (
        <div>
          <h3>{quest.title}</h3>
          <p>{quest.description}</p>
          <p><strong>Location:</strong> {quest.location}</p>
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Quest;
