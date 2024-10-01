// src/components/LessonTemplate.js
import React from 'react';

const LessonTemplate = ({ title, content }) => {
  return (
    <div className="lesson-page">
      <h1>{title}</h1>
      <div className="lesson-content">
        {content}
      </div>
    </div>
  );
};

export default LessonTemplate;
