// src/components/LessonItem.js
import React from 'react';

const LessonItem = ({ id, title, onClick }) => {
  return (
    <li id={id} onClick={onClick}>
      {title}
    </li>
  );
};

export default LessonItem;
