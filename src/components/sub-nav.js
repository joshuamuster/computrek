import React from 'react';
import '../assets/lcars-ultra-classic.css';
import '../assets/lcars-colors.css';
import '../assets/lcars.js';

const SubNav = ({ currentDeck, handleResourceChange }) => {
  const lessonName = 'Lesson 01 - Intro to Problem Solving'; // This should be dynamically set based on the selected lesson

  return (
    <div className="wrap" id="gap">
      <div className="left-frame">
        <div id="ResourceButtons">
          {['Handout', 'Activity Guide', 'Slide Deck', 'Grading Rubric', 'Additional Resources', 'Welcome'].map((panel, i) => (
            <div
              key={i}
              id={`panel-${i + 3}`}
              className={`panel-${i + 3} resourceButton`}
              onClick={(e) => handleResourceChange(e, panel, lessonName)}
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
