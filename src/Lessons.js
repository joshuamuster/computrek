import React, { useState } from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

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
              <li id="U01L01" onClick={handleLessonClick}>Lesson 01 - <span>Intro to Problem Solving</span></li>
              <li id="U01L02" onClick={handleLessonClick}>Lesson 02 - <span>The Problem Solving Process</span></li>
              <li id="U01L03" onClick={handleLessonClick}>Lesson 03 - <span>Exploring Problem Solving</span></li>
              <li id="U01L04" onClick={handleLessonClick}>Lesson 04 - <span>What Is A Computer</span></li>
              <li id="U01L05" onClick={handleLessonClick}>Lesson 05 - <span>Input and Output</span></li>
              <li id="U01L06" onClick={handleLessonClick}>Lesson 06 - <span>Processing</span></li>
              <li id="U01L07" onClick={handleLessonClick}>Lesson 07 - <span>Storage</span></li>
              <li id="U01L08" onClick={handleLessonClick}>Lesson 08 - <span className="go-tomato">Project: Propose An App</span></li>
            </ul>
          </div>
          <div>
            <h1 className="text-orange">Unit 02</h1>
            <h3>Web Development</h3>
            <h4 className="LessonListChapter">Chapter 01</h4>
            <ul id="Unit02" className="LessonList">
              <li id="U02L01" onClick={handleLessonClick}>Lesson 01 - <span>Exploring Web Pages</span></li>
              <li id="U02L02" onClick={handleLessonClick}>Lesson 02 - <span>Intro to HTML</span></li>
              <li id="U02L03" onClick={handleLessonClick}>Lesson 03 - <span>Headings and Lists</span></li>
              <li id="U02L04" onClick={handleLessonClick}>Lesson 04 - <span>Digital Footprint</span></li>
              <li id="U02L05" onClick={handleLessonClick}>Lesson 05 - <span className="go-tomato">Mini-Project: HTML Web Page</span>
              </li>
              <li id="U02L06" onClick={handleLessonClick}>Lesson 06 - <span>Styling Text With CSS</span></li>
              <li id="U02L07" onClick={handleLessonClick}>Lesson 07 - <span>Intellectual Property</span></li>
              <li id="U02L08" onClick={handleLessonClick}>Lesson 08 - <span>Using Images</span></li>
              <li id="U02L09" onClick={handleLessonClick}>Lesson 09 - <span>Styling Elements With CSS</span></li>
              <li id="U02L10" onClick={handleLessonClick}>Lesson 10 - <span className="go-tomato">Mini-Project: Adding Style to a Web Page</span>
              </li>
              <li id="U02L11" onClick={handleLessonClick}>Lesson 11 - <span>CSS Classes</span></li>
              <li id="U02L12" onClick={handleLessonClick}>Lesson 12 - <span>Organizing Content with Flexbox</span></li>
              <li id="U02L13" onClick={handleLessonClick}>Lesson 13 - <span>Flexbox Children for More Control</span>
              </li>
              <li id="U02L14" onClick={handleLessonClick}>Lesson 14 - <span
                className="go-tomato">Chapter 1 Project</span></li>
            </ul>
            <h4 className="LessonListChapter">Chapter 02</h4>
            <ul id="Unit02" className="LessonList">
              <li id="U02L15" onClick={handleLessonClick}>Lesson 15 - <span>Team Problem Solving</span></li>
              <li id="U02L16" onClick={handleLessonClick}>Lesson 16 - <span>Sources and Research</span></li>
              <li id="U02L17" onClick={handleLessonClick}>Lesson 17 - <span>Linking Pages</span></li>
              <li id="U02L18" onClick={handleLessonClick}>Lesson 18 - <span>CSS Pseudo-classes</span></li>
              <li id="U02L19" onClick={handleLessonClick}>Lesson 19 - <span>Planning a Multi-Page Site</span></li>
              <li id="U02L20" onClick={handleLessonClick}>Lesson 20 - <span className="go-tomato">Project - Website for a Purpose</span>
              </li>
              <li id="U02L21" onClick={handleLessonClick}>Lesson 21 - <span>Peer Review and Final Touches</span></li>
            </ul>
          
          </div>
          <div>
            <h1 className="text-orange">Unit 03</h1>
            <h3>Interactive Animations and Games</h3>
            <h4 className="LessonListChapter">Chapter 01</h4>
            <ul id="Unit03" className="LessonList">
              <li id="U03L01" onClick={handleLessonClick}>Lesson 01 - <span>Programming for a Purpose</span></li>
              <li id="U03L02" onClick={handleLessonClick}>Lesson 02 - <span>Plotting Shapes</span></li>
              <li id="U03L03" onClick={handleLessonClick}>Lesson 03 - <span>Drawing in Game Lab</span></li>
              <li id="U03L04" onClick={handleLessonClick}>Lesson 04 - <span>Shapes and Parameters</span></li>
              <li id="U03L05" onClick={handleLessonClick}>Lesson 05 - <span>Variables</span></li>
              <li id="U03L06" onClick={handleLessonClick}>Lesson 06 - <span>Random Numbers</span></li>
              <li id="U03L07" onClick={handleLessonClick}>Lesson 07 - <span className="go-tomato">Mini-Project: Robot Faces</span>
              </li>
              <li id="U03L08" onClick={handleLessonClick}>Lesson 08 - <span>Sprites</span></li>
              <li id="U03L09" onClick={handleLessonClick}>Lesson 09 - <span>Sprite Properties</span></li>
              <li id="U03L10" onClick={handleLessonClick}>Lesson 10 - <span>Text</span></li>
              <li id="U03L11" onClick={handleLessonClick}>Lesson 11 - <span className="go-tomato">Mini-Project: Captioned Scenes</span>
              </li>
              <li id="U03L12" onClick={handleLessonClick}>Lesson 12 - <span>The Draw Loop</span></li>
              <li id="U03L13" onClick={handleLessonClick}>Lesson 13 - <span>Sprite Movement</span></li>
              <li id="U03L14" onClick={handleLessonClick}>Lesson 14 - <span className="go-tomato">Mini-Project: Animation</span>
              </li>
              <li id="U03L15" onClick={handleLessonClick}>Lesson 15 - <span>Conditionals</span></li>
              <li id="U03L16" onClick={handleLessonClick}>Lesson 16 - <span>Keyboard Input</span></li>
              <li id="U03L17" onClick={handleLessonClick}>Lesson 17 - <span>Mouse Input</span></li>
              <li id="U03L18" onClick={handleLessonClick}>Lesson 18 - <span className="go-tomato">Project: Interactive Card</span>
              </li>
              <h4 className="LessonListChapter">Chapter 02</h4>
              <li id="U03L19" onClick={handleLessonClick}>Lesson 19 - <span>Velocity</span></li>
              <li id="U03L20" onClick={handleLessonClick}>Lesson 20 - <span>Collision Detection</span></li>
              <li id="U03L21" onClick={handleLessonClick}>Lesson 21 - <span className="go-tomato">Mini-Project: Side Scroller</span>
              </li>
              <li id="U03L22" onClick={handleLessonClick}>Lesson 22 - <span>Complex Sprite Movement</span></li>
              <li id="U03L23" onClick={handleLessonClick}>Lesson 23 - <span>Collisions</span></li>
              <li id="U03L24" onClick={handleLessonClick}>Lesson 24 - <span className="go-tomato">Mini-Project: Flyer Game</span>
              </li>
              <li id="U03L25" onClick={handleLessonClick}>Lesson 25 - <span>Functions</span></li>
              <li id="U03L26" onClick={handleLessonClick}>Lesson 26 - <span>The Game Design Process</span></li>
              <li id="U03L27" onClick={handleLessonClick}>Lesson 27 - <span>Using the Game Design Process</span></li>
              <li id="U03L28" onClick={handleLessonClick}>Lesson 28 - <span
                className="go-tomato">Project: Design a Game</span></li>
            </ul>
          
          </div>
        </div>
      )}
    </main>
  );
};

export default Lessons;
