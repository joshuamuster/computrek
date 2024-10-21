import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';
import ErrorMessage from './Error';

const Rubrics = () => {
  const lessonId = window.location.hash.substring(1); // Get the lesson ID from the URL hash
	
	if (!lessonId) {
		return <ErrorMessage />;
	}

  const src = `/Lessons/Unit${lessonId.substring(1, 3)}/Rubrics/${lessonId}-Rubrics.pdf`;

  return (
    <main>
      <iframe
        src={src}
        width="100%"
        height="900px"
        style={{ border: 'none' }}
        title="Rubrics PDF"
      ></iframe>
    </main>
  );
};

export default Rubrics;
