import React from 'react';
import '../assets/lcars-ultra-classic.css';
import '../assets/lcars-colors.css';
import '../assets/lcars.js';
import {playButtonSound01} from '../soundEffects';

const SubNav = ({ currentDeck, handleResourceChange }) => {
  const handleClick = (e, panel) => {
    playButtonSound01(); // Play the sound
    handleResourceChange(e, panel); // Call the passed handleResourceChange handler
  };

  return (
    <div className="wrap" id="gap">
      <div className="left-frame">
        <div id="ResourceButtons">
          {['Lesson', 'Activity Guide', 'Slideshow', 'Grading Rubric', 'Other', 'Welcome'].map((panel, i) => (
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
        {React.createElement(currentDeck)}
      </div>
    </div>
  );
};

export default SubNav;
