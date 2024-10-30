import React, { useState } from 'react';
import '../assets/lcars-ultra-classic.css';
import '../assets/lcars-colors.css';
import '../assets/lcars.js';
import { playButtonSound01 } from '../soundEffects';
import ErrorMessage from '../Error';

const LessonsNav = ({ currentDeck, handleResourceChange }) => {
  const [showError, setShowError] = useState(false);

  const handleClick = (e, panel) => {
    playButtonSound01(); // Play the sound
    handleResourceChange(e, panel); // Call the passed handleResourceChange handler

    // Check if the URI contains a '#' symbol
    if (!window.location.hash.includes('#')) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div className="wrap" id="gap">
      <div className="left-frame">
        <div id="ResourceButtons">
          {['Lesson', 'Activity Guide', 'Slideshow', 'Code Studio', 'Videos', 'Other', 'Welcome'].map((panel, i) => (
            <div
              key={i}
              id={`panel-${i + 3}`}
              className={`panel-${i + 3} resourceButton`}
              onClick={(e) => handleClick(e, panel)}
              style={{ cursor: 'pointer' }}
            >
              <span className="hop">{panel}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-frame">
        <div className="bar-panel">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`bar-${i + 6}`}></div>
          ))}
        </div>
        {showError ? <ErrorMessage /> : React.createElement(currentDeck)}
      </div>
    </div>
  );
};

export default LessonsNav;
