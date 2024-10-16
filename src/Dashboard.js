import React from 'react';
import { Link } from 'react-router-dom';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';
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
import SlideDeck from './Slideshows';
import Rubrics from './Rubrics';
import AdditionalResources from './AdditionalResources';
import Welcome from './Welcome';
import MainNav from './components/main-nav';
import TopBar from './components/top-bar';
import SubNav from './components/sub-nav';

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

  handleResourceChange = (event, resourceName, lessonName = '') => {
  event.preventDefault();
  this.playResourceSound();
  console.log(`Opening resource: ${resourceName} for lesson: ${lessonName}`);

  const resourceMap = {
    'Lessons': () => <Lessons resetLessonComponent={this.resetLessonComponent} />,
    'Handout': Handouts,
    'Activity Guide': () => <ActivityGuides lessonName={lessonName} />,
    'Slide Deck': SlideDeck,
    'Grading Rubric': Rubrics,
    'Additional Resources': AdditionalResources,
    'Welcome': Welcome,
  };

  this.setState({
    currentDeck: resourceMap[resourceName],
    currentResourceName: resourceName,
  });
};

  resetLessonComponent = () => {
    this.setState({
      currentDeck: () => <Lessons resetLessonComponent={this.resetLessonComponent} />,
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
        <MainNav
          handleResourceChange={this.handleResourceChange} handleDeckChange={this.handleDeckChange}
        />
        <section id="column-3" className="wrap-standard-full-width">
          <TopBar
            handleResourceChange={this.handleResourceChange}
            handleDeckChange={this.handleDeckChange}
            currentDeckName={this.state.currentDeckName}
            currentResourceName={this.state.currentResourceName}
          />
          <SubNav
            currentDeck={this.state.currentDeck}
            handleResourceChange={this.handleResourceChange}
          />
        </section>
      </div>
    );
  }
}

export default LcarsPage;
