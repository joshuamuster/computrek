import React from 'react';
import { Link } from 'react-router-dom';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';
import AllianceLogoGlowing from './assets/img/FederationLogo-Glow-min.png';
// import keyok2 from './assets/media/sounds/SFXcomputer/keyok2.wav';
import keyok2 from './assets/media/sounds/panel_beep_03.mp3';

import DeckMain from './DeckMain';
import Deck00 from './Deck00';
import Deck01 from './Deck01';
import Deck02 from './Deck02';
import Deck05 from './Deck05';
import Deck06 from './Deck06';
import Deck07 from './Deck07';
import Deck08 from './Deck08';

import Welcome from './Welcome';

class LcarsPage extends React.Component {
  state = {
    currentDeck: DeckMain,
    currentDeckName: 'C.S.S. Odyssey',
  };

  playSound = () => {
    const audio = new Audio(keyok2);
    audio.play();
  };

  handleDeckChange = (event, deckName) => {
    event.preventDefault();
    this.playSound();
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
    };
    this.setState({
      currentDeck: deckMap[deckName],
      currentDeckName: deckName,
    });
  };

  componentDidMount() {
    const deckButtons = document.getElementById('DeckButtons');
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
  }

  componentWillUnmount() {
    const deckButtons = document.getElementById('DeckButtons');
    if (deckButtons) {
      deckButtons.removeEventListener('click', this.handleDeckChange);
      deckButtons.removeEventListener('touchend', this.handleDeckChange);
    }
  }

  render() {
    const { currentDeck, currentDeckName } = this.state;

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
          
          
          {/* Deck Buttons */}
          
          
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
          
          
          {/* Resource Buttons */}
          
          
          {/*<div id="ResourceButtons" className="pillbox">*/}
          {/*  {['Welcome', 'Handouts', 'Activity Guides', 'Slideshow', 'Grading Rubric', 'Lessons', 'Other'].map((pill, i) => (*/}
          {/*    <div key={i} className="pill-2"><a href="">{pill}</a></div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </section>
        <section id="column-3" className="wrap-standard-full-width">
          <div className="wrap">
            <div className="scroll-top"><a id="scroll-top" href=""><span className="hop">screen</span> top</a></div>
            <div className="left-frame-top">
              <div className="panel-2">02<span className="hop">-262000</span></div>
            </div>
            <div className="right-frame-top">
              <div className="banner">{currentDeckName} • <span className="blink">Active</span></div>
              <div className="bar-panel first-bar-panel">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`bar-${i + 1}`}></div>
                ))}
              </div>
            </div>
          </div>
          <div className="wrap" id="gap">
            <div className="left-frame">
              <div>
                {['Lessons', 'Handouts', 'Activity Guides', 'Slideshows', 'Rubrics', 'Other'].map((panel, i) => (
                  <div key={i} id={`panel-${i + 3}`} className={`panel-${i + 3} resourceButton`}><span className="hop">{panel}</span></div>
                ))}
              </div>
              <div>
                <div className="panel-10">Welcome<span className="hop">-2024</span></div>
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
