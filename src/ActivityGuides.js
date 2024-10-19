import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

const ActivityGuides = () => {
  const lessonId = window.location.hash.substring(1); // Get the lesson ID from the URL hash
  const src = `/Lessons/Unit${lessonId.substring(1, 3)}/ActivityGuide/${lessonId}-ActivityGuide.pdf`;

  return (
    <main>
      <iframe
        src={src}
        width="100%"
        height="900px"
        style={{ border: 'none' }}
        title="Activity Guide PDF"
      ></iframe>
    </main>
  );
};

export default ActivityGuides;
