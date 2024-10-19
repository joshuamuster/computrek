import React, { useState } from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';
import LessonItem from './components/LessonItem';
import { Unit01Array, Unit02Array, Unit03Array } from './components/LessonArray';

const Lessons = () => {
  const [LessonComponent, setLessonComponent] = useState(null);

  const handleLessonClick = async (event) => {
    const lessonId = event.currentTarget.id;
    const unitId = event.currentTarget.parentElement.id;
    const lessonModule = await import(`./Lessons/${unitId}/${lessonId}.js`);
    setLessonComponent(() => lessonModule.default);
    console.log(`Loaded lesson: ${unitId}/${lessonId}`, lessonModule.default);
  };

  return (
    <main>
      {LessonComponent ? (
        <LessonComponent />
      ) : (
        <div className="LessonGrid">
          <div>
            <h1 className="text-orange">Unit 01</h1>
            <h3>Problem Solving and Computing</h3>
            <ul id="Unit01" className="LessonList">
              {Unit01Array.map((lesson) => (
                <LessonItem
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  onClick={handleLessonClick}
                />
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-orange">Unit 02</h1>
            <h3>Web Development</h3>
            <ul id="Unit02" className="LessonList">
              {Unit02Array.map((lesson) => (
                <LessonItem
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  onClick={handleLessonClick}
                />
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-orange">Unit 03</h1>
            <h3>Programming</h3>
            <ul id="Unit03" className="LessonList">
              {Unit03Array.map((lesson) => (
                <LessonItem
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  onClick={handleLessonClick}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};

export default Lessons;
