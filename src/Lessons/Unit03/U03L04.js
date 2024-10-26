// src/Lessons/Unit01/U01L01/U01L01.js
import React from 'react';
import LessonTemplate from '../LessonTemplate';
import { Unit03Array } from '../../components/LessonArray';
import '../../styles/index.css';

const U03L04content = () => {
  const lessonId = 'U03L04';
  const lesson = Unit03Array.find(lesson => lesson.id === lessonId);
  const title = lesson ? lesson.title : 'Lesson not found';
  const content = "Links to Files and Resources for Unit 03 Lesson 04 will go here...I hope.";
  
  return <LessonTemplate title={title} content={content} />;
};

export default U03L04content;
