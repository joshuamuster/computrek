import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';
import ErrorMessage from './Error';

const Handouts = () => {
  const lessonId = window.location.hash.substring(1); // Get the lesson ID from the URL hash

  if (!lessonId) {
    return <ErrorMessage />;
  }

  return (
    <main>
      <h1>handouts</h1>
    </main>
  );
};

export default Handouts;
