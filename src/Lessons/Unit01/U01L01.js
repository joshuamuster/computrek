// src/Lessons/Unit01/U01L01/U01L01.js
import React from 'react';
import LessonTemplate from '../../components/LessonTemplate';
import '../../index.css';
import ThumbnailActivity from '../../assets/img/Thumbnail-ActivityGuide-min.jpg';
import ThumbnailSlideshow from '../../assets/img/Thumbnail-Slideshow-min.jpg';

const U01L01content = () => {
  const title = "Unit 01 - Lesson 01";
  const content = (
    <div>
      <p>Links to Files and Resources for Unit 01 Lesson 01 will go here!!!</p>
      <img className="lessonThumbnail" src={ThumbnailActivity} alt="Lesson Thumbnail"/>
      <img className="lessonThumbnail" src={ThumbnailSlideshow} alt="Lesson Thumbnail"/>
    </div>
  );
  
  return <LessonTemplate title={title} content={content}/>;
};

export default U01L01content;
