import React, { useState } from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';
import LessonItem from './components/LessonItem';

const Lessons = () => {
  const [LessonComponent, setLessonComponent] = useState(null);

  const handleLessonClick = async (event) => {
    const lessonId = event.currentTarget.id;
    const unitId = event.currentTarget.parentElement.id;
    const lessonModule = await import(`./Lessons/${unitId}/${lessonId}.js`);
    setLessonComponent(() => lessonModule.default);
    console.log(`Loaded lesson: ${unitId}/${lessonId}`, lessonModule.default);
  };

  const unit01Lessons = [
    { id: 'U01L01', title: 'Lesson 01 - Intro to Problem Solving' },
    { id: 'U01L02', title: 'Lesson 02 - The Problem Solving Process' },
    { id: 'U01L03', title: 'Lesson 03 - Exploring Problem Solving' },
    { id: 'U01L04', title: 'Lesson 04 - What Is A Computer' },
    { id: 'U01L05', title: 'Lesson 05 - Input and Output' },
    { id: 'U01L06', title: 'Lesson 06 - Processing' },
    { id: 'U01L07', title: 'Lesson 07 - Storage' },
    { id: 'U01L08', title: 'Lesson 08 - Project: Propose An App' },
  ];

  const unit02Lessons = [
    { id: 'U02L01', title: 'Lesson 01 - Exploring Web Pages' },
    { id: 'U02L02', title: 'Lesson 02 - Intro to HTML' },
    { id: 'U02L03', title: 'Lesson 03 - Headings and Lists' },
    { id: 'U02L04', title: 'Lesson 04 - Digital Footprint' },
    { id: 'U02L05', title: 'Lesson 05 - Mini-Project: HTML Web Page', specialClass: 'go-tomato' },
    { id: 'U02L06', title: 'Lesson 06 - Styling Text With CSS' },
    { id: 'U02L07', title: 'Lesson 07 - Intellectual Property' },
    { id: 'U02L08', title: 'Lesson 08 - Using Images' },
    { id: 'U02L09', title: 'Lesson 09 - Styling Elements With CSS' },
    { id: 'U02L10', title: 'Lesson 10 - Mini-Project: Adding Style to a Web Page', specialClass: 'go-tomato' },
    { id: 'U02L11', title: 'Lesson 11 - CSS Classes' },
    { id: 'U02L12', title: 'Lesson 12 - Organizing Content with Flexbox' },
    { id: 'U02L13', title: 'Lesson 13 - Flexbox Children for More Control' },
    { id: 'U02L14', title: 'Lesson 14 - Chapter 1 Project', specialClass: 'go-tomato' },
    { id: 'U02L15', title: 'Lesson 15 - Team Problem Solving' },
    { id: 'U02L16', title: 'Lesson 16 - Sources and Research' },
    { id: 'U02L17', title: 'Lesson 17 - Linking Pages' },
    { id: 'U02L18', title: 'Lesson 18 - CSS Pseudo-classes' },
    { id: 'U02L19', title: 'Lesson 19 - Planning a Multi-Page Site' },
    { id: 'U02L20', title: 'Lesson 20 - Project: Website for a Purpose', specialClass: 'go-tomato' },
    { id: 'U02L21', title: 'Lesson 21 - Peer Review and Final Touches' },
  ];

  const unit03Lessons = [
    { id: 'U03L01', title: 'Lesson 01 - Programming for a Purpose' },
    { id: 'U03L02', title: 'Lesson 02 - Plotting Shapes' },
    { id: 'U03L03', title: 'Lesson 03 - Drawing in Game Lab' },
    { id: 'U03L04', title: 'Lesson 04 - Shapes and Parameters' },
    { id: 'U03L05', title: 'Lesson 05 - Variables' },
    { id: 'U03L06', title: 'Lesson 06 - Random Numbers' },
    { id: 'U03L07', title: 'Lesson 07 - Mini-Project: Robot Faces', specialClass: 'go-tomato' },
    { id: 'U03L08', title: 'Lesson 08 - Sprites' },
    { id: 'U03L09', title: 'Lesson 09 - Sprite Properties' },
    { id: 'U03L10', title: 'Lesson 10 - Text' },
    { id: 'U03L11', title: 'Lesson 11 - Mini-Project: Captioned Scenes', specialClass: 'go-tomato' },
    { id: 'U03L12', title: 'Lesson 12 - The Draw Loop' },
    { id: 'U03L13', title: 'Lesson 13 - Sprite Movement' },
    { id: 'U03L14', title: 'Lesson 14 - Mini-Project: Animation', specialClass: 'go-tomato' },
    { id: 'U03L15', title: 'Lesson 15 - Conditionals' },
    { id: 'U03L16', title: 'Lesson 16 - Keyboard Input' },
    { id: 'U03L17', title: 'Lesson 17 - Mouse Input' },
    { id: 'U03L18', title: 'Lesson 18 - Project: Interactive Card', specialClass: 'go-tomato' },
    { id: 'U03L19', title: 'Lesson 19 - Velocity' },
    { id: 'U03L20', title: 'Lesson 20 - Collision Detection' },
    { id: 'U03L21', title: 'Lesson 21 - Mini-Project: Side Scroller', specialClass: 'go-tomato' },
    { id: 'U03L22', title: 'Lesson 22 - Complex Sprite Movement' },
    { id: 'U03L23', title: 'Lesson 23 - Collisions' },
    { id: 'U03L24', title: 'Lesson 24 - Mini-Project: Flyer Game', specialClass: 'go-tomato' },
    { id: 'U03L25', title: 'Lesson 25 - Functions' },
    { id: 'U03L26', title: 'The Game Design Process' },
    { id: 'U03L27', title: 'Using the Game Design Process' },
    { id: 'U03L28', title: 'Project: Design a Game', specialClass: 'go-tomato' },
  ];

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
              {unit01Lessons.map((lesson) => (
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
              {unit02Lessons.map((lesson) => (
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
              {unit03Lessons.map((lesson) => (
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
