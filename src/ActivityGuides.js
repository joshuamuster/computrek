import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

import ThumbnailActivity from './assets/img/Thumbnail-ActivityGuide.jpg';
import ThumbnailSlideshow from './assets/img/Thumbnail-Slideshow.jpg';

const ActivityGuides = ({ lessonName }) => {
  const activityGuides = {
    'Lesson 01 - Intro to Problem Solving': 'All the content for Lesson 01 Activity Guide',
    // Add other lessons and their content here
  };

  return (
    <div>
      <h1>Activity Guide</h1>
      <p>{activityGuides[lessonName]}</p>
    </div>
  );
};

export default ActivityGuides;
