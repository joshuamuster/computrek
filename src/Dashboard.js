import React from 'react';
import { Link } from 'react-router-dom';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';
import AllianceLogoGlowing from './assets/img/FederationLogo-Glow-min.png';
// import keyok2 from './assets/media/sounds/SFXcomputer/keyok2.wav';
import keyok1 from './assets/media/sounds/panel_beep_14.mp3';
import keyok2 from './assets/media/sounds/panel_beep_03.mp3';

import DeckMain from './DeckMain';
import Deck00 from './Deck00';
import Deck01 from './Deck01';
import Deck02 from './Deck02';
import Deck05 from './Deck05';
import Deck06 from './Deck06';
import Deck07 from './Deck07';
import Deck08 from './Deck08';

import Lessons from './Lessons';
import Handouts from './Handouts';
import ActivityGuides from './ActivityGuides';
import Slideshows from './Slideshows';
import Rubrics from './Rubrics';
import Other from './Other';
import Welcome from './Welcome';

class LcarsPage extends React.Component {
  state = {
    currentDeck: DeckMain,
    currentDeckName: 'C.S.S. Odyssey',
    currentResourceName: '',
  };

  playDeckSound = () => {
    const audio = new Audio(keyok2);
    audio.play();
  };
  playResourceSound = () => {
    const audio = new Audio(keyok1);
    audio.play();
  };

  handleDeckChange = (event, deckName) => {
    event.preventDefault();
    this.playDeckSound();
    console.log(`Changing to ${deckName}`);
    const deckMap = {
      'Bridge': DeckMain,
      'Advisory': Deck00,
      'Deck 01': Deck01,
      'Deck 02': Deck02,
      'Deck 05': Deck05,
      'Deck 06': Deck06,
      'Deck 07': Deck07,
      'Deck 08': Deck08,
      'Welcome': Welcome,
    };
    this.setState({
      currentDeck: deckMap[deckName],
      currentDeckName: deckName,
      currentResourceName: '',
    });
  };

  handleResourceChange = (event, resourceName) => {
    event.preventDefault();
    this.playResourceSound();
    console.log(`Opening resource: ${resourceName}`);

    const resourceMap = {
      'Lessons': Lessons,
      'Handout': Handouts,
      'Activity Guide': ActivityGuides,
      'Slideshow': Slideshows,
      'Grading Rubric': Rubrics,
      'Other': Other,
      'Welcome': Welcome,
    };

    this.setState({
      currentDeck: resourceMap[resourceName],
      currentResourceName: resourceName,
    });
  };

  componentDidMount() {
    const deckButtons = document.getElementById('DeckButtons');
    const resourceButtons = document.getElementById('ResourceButtons');

    if (deckButtons) {
      deckButtons.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
          this.handleDeckChange(event, event.target.textContent);
        }
      });
      deckButtons.addEventListener('touchend', (event) => {
        if (event.target.tagName === 'A') {
          this.handleDeckChange(event, event.target.textContent);
        }
      });
    }

    if (resourceButtons) {
      resourceButtons.addEventListener('click', (event) => {
        if (event.target.tagName === 'DIV') {
          const resourceName = event.target.textContent.trim();
          this.handleResourceChange(event, resourceName);
        }
      });
      resourceButtons.addEventListener('touchend', (event) => {
        if (event.target.tagName === 'DIV') {
          const resourceName = event.target.textContent.trim();
          this.handleResourceChange(event, resourceName);
        }
      });
    }
  }

  componentWillUnmount() {
    const deckButtons = document.getElementById('DeckButtons');
    const resourceButtons = document.getElementById('ResourceButtons');

    if (deckButtons) {
      deckButtons.removeEventListener('click', this.handleDeckChange);
      deckButtons.removeEventListener('touchend', this.handleDeckChange);
    }

    if (resourceButtons) {
      resourceButtons.removeEventListener('click', this.handleResourceChange);
      resourceButtons.removeEventListener('touchend', this.handleResourceChange);
    }
  }

  render() {
    const { currentDeck, currentDeckName, currentResourceName } = this.state;

    return (
      <div className="wrap-everything">
        <section id="column-1">
          <div className="lcars-frame">
            <div className="frame-col-1">
              <div className="frame-col-1-cell-a"></div>
              <div className="frame-col-1-cell-b"></div>
              <div className="frame-col-1-cell-c"></div>
            </div>
            <div className="frame-col-2"></div>
            <div className="frame-col-3 display-vertical">
              <div className="glow-container">
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
          
          <div id="DeckButtons" className="pillbox">
            {['Deck 01', 'Deck 02', 'Deck 05', 'Deck 06', 'Deck 07', 'Deck 08', 'Advisory', 'Bridge'].map((pill, i) => (
              <div key={i} className="pill">
                <a href="#">{pill}</a>
              </div>
            ))}
          </div>
          <div className="lcars-list-2 uppercase">
            <ul>
              <li>Subspace Link: <span className="oc-almond-creme go-almond-creme">Established</span></li>
              <li>Starfleet Database: <span className="oc-almond-creme go-almond-creme">Connected</span></li>
              <li>Quantum Memory Field: <span className="oc-almond-creme go-almond-creme">Stable</span></li>
              <li>Optical Network: <span className="oc-almond-creme go-almond-creme">rerouting</span></li>
            </ul>
          </div>
          
          <div className="pill" id="LessonLink">
            <a href="#" onClick={(e) => this.handleResourceChange(e, 'Lessons')}>Lessons</a>
          </div>
          
          {/*<div className="pill" id="WelcomeLink">*/}
          {/*  <a href="#" onClick={(e) => this.handleDeckChange(e, 'Lessons')}>Lessons</a>*/}
          {/*</div>*/}
        </section>
        <section id="column-3" className="wrap-standard-full-width">
          <div className="wrap">
            <div className="scroll-top"><a id="scroll-top" href=""><span className="hop">screen</span> top</a></div>
            <div className="left-frame-top">
              <div className="panel-2">02<span className="hop">-262000</span></div>
            </div>
            <div className="right-frame-top">
              <div className="banner text-orange">{currentDeckName} • <span className="blink text-purple">Active</span>
              </div>
              <h1 className="go-tomato" style={{margin: 0}}>{currentResourceName || 'Index Resources'}</h1>
              <div className="bar-panel first-bar-panel">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`bar-${i + 1}`}></div>
                ))}
              </div>
            </div>
          </div>
          <div className="wrap" id="gap">
            <div className="left-frame">
              <div id="ResourceButtons">
                {['Handout', 'Activity Guide', 'Slideshow', 'Grading Rubric', 'Other', 'Welcome'].map((panel, i) => (
                  <div key={i} id={`panel-${i + 3}`} className={`panel-${i + 3} resourceButton`}>
                    <span className="hop">{panel}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right-frame">
              <div className="bar-panel">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`bar-${i + 6}`}></div>
                ))}
              </div>
              {React.createElement(currentDeck)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LcarsPage;
