// src/Lessons/Unit01/U01L01/U01L01.js
import React from 'react';
import LessonTemplate from '../../components/LessonTemplate';
import { Unit01Array } from '../../components/LessonArray';
import '../../index.css';

const U01L01content = () => {
  const lessonId = 'U01L01';
  const lesson = Unit01Array.find(lesson => lesson.id === lessonId);
  const title = lesson ? lesson.title : 'Lesson not found';
  const content = "Links to Files and Resources for Unit 01 Lesson 01 will go here!!!";

  return <LessonTemplate title={title} content={content} />;
};

export default U01L01content;
