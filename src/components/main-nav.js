import React from 'react';
import '../assets/lcars-ultra-classic.css';
import '../assets/lcars-colors.css';
import '../assets/lcars.js';
import AllianceLogoGlowing from '../assets/img/FederationLogo-Glow-min.png';
import TimeAway from './TimeAway';
import { playKeyOk02, playButtonSound02, playAlertSound, playNotificationSound } from '../soundEffects';


const MainNav = ({ handleResourceChange, resetMainContent }) => {
  const handleLessonsClick = (e) => {
    playKeyOk02(); // Call the sound function
    handleResourceChange(e, 'Lessons');
    window.location.hash = ''; // Clear the URL hash
  };

  return (
    <section id="column-1">
      <div className="lcars-frame">
        <div className="frame-col-1">
          <div className="frame-col-1-cell-a"></div>
          <div className="frame-col-1-cell-b"></div>
          <div className="frame-col-1-cell-c"></div>
        </div>
        <div className="frame-col-2"></div>
        <div className="frame-col-3 display-vertical">
          <div className="glow-container" onClick={resetMainContent}>
            <img id="AllianceLogo" src={AllianceLogoGlowing} alt="CompuTrek Logo"/>
          </div>
        </div>
        <div className="frame-col-4"></div>
        <div className="frame-col-5">
          <div className="frame-col-5-cell-a"></div>
          <div className="frame-col-5-cell-b"></div>
          <div className="frame-col-5-cell-c"></div>
        </div>
      </div>

      <div className="uppercase">
        <p>Deck Access: <span className="oc-almond-creme go-almond-creme">Connected</span></p>
      </div>

      <div className="pill" id="LessonLink">
        <a href="#" onClick={handleLessonsClick}>Lessons</a>
      </div>

      <div className="lcars-frame" style={{marginTop: '20px'}}>
        <div className="frame-col-1">
          <div className="frame-col-1-cell-a"></div>
          <div className="frame-col-1-cell-b"></div>
          <div className="frame-col-1-cell-c"></div>
        </div>
        <div className="frame-col-2"></div>
        <div className="frame-col-3 display-vertical">
          <TimeAway/>
        </div>
        <div className="frame-col-4"></div>
        <div className="frame-col-5">
          <div className="frame-col-5-cell-a"></div>
          <div className="frame-col-5-cell-b"></div>
          <div className="frame-col-5-cell-c"></div>
        </div>
      </div>

      <br/>
      <div className="pill" style={{marginBottom: '20px'}} id="LessonLink"><a href="#" onClick={handleLessonsClick}>CONVERSATION LEVEL</a>
      </div>
      <div className="pill" style={{marginBottom: '20px'}} id="LessonLink"><a href="#" onClick={handleLessonsClick}>HELP</a>
      </div>
      <div className="pill" style={{marginBottom: '20px'}} id="LessonLink"><a href="#" onClick={handleLessonsClick}>ACTIVITY</a>
      </div>
      <div className="pill" style={{marginBottom: '20px'}} id="LessonLink"><a href="#" onClick={handleLessonsClick}>MOVEMENT</a>
      </div>
      <div className="pill" style={{marginBottom: '20px'}} id="LessonLink"><a href="#" onClick={handleLessonsClick}>PARTICIPATION</a>
      </div>
      <div className="pill" style={{marginBottom: '20px'}} id="LessonLink"><a href="#" onClick={handleLessonsClick}>SUCCESS</a>
      </div>

      <div className="lcars-list-2 uppercase">
        <ul>
          <li>Subspace Link: <span className="oc-almond-creme go-almond-creme">Established</span></li>
          <li>Starfleet Database: <span className="oc-almond-creme go-almond-creme">Connected</span></li>
          <li>Quantum Memory Field: <span className="oc-almond-creme go-almond-creme">Stable</span></li>
          <li>Optical Network: <span className="oc-almond-creme go-almond-creme">rerouting</span></li>
        </ul>
      </div>
    </section>
  );
};

export default MainNav;
