// src/components/LessonItem.js
import React from 'react';
import '../index.css';
import { playKeyOk03 } from '../soundEffects';

const LessonItem = ({ id, title, subtitle, onClick }) => {
  const handleClick = (e) => {
    playKeyOk03(); // Play the sound
    onClick(e); // Call the passed onClick handler
  };

  return (
    <li id={id} onClick={handleClick}>
      {title} - <span className="">{subtitle}</span>
    </li>
  );
};

export default LessonItem;
