// src/components/LessonItem.js
import React from 'react';
import '../index.css';

const LessonItem = ({ id, title, subtitle, onClick }) => {
  return (
    <li id={id} onClick={onClick}>
      {title} - <span className="">{subtitle}</span>
    </li>
  );
};

export default LessonItem;
