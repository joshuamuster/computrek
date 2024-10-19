import React from 'react';
import DeckMain from './DeckMain';
import Lessons from './Lessons';
import Handouts from './Handouts';
import ActivityGuides from './ActivityGuides';
import Slideshows from './Slideshows';
import Rubrics from './Rubrics';
import Other from './Other';
import Welcome from './Welcome';
import MainNav from './components/main-nav';
import TopBar from './components/top-bar';
import SubNav from './components/sub-nav';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDeck: DeckMain,
      currentDeckName: 'CompuTrek',
      currentResourceName: '',
    };
  }

  handleResourceChange = (event, resourceName) => {
    event.preventDefault();
    console.log(`Opening resource: ${resourceName}`);

    const resourceMap = {
      'Lessons': () => <Lessons resetLessonComponent={this.resetLessonComponent} />,
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

  resetLessonComponent = () => {
    this.setState({
      currentDeck: () => <Lessons resetLessonComponent={this.resetLessonComponent} />,
    });
  };

  componentDidMount() {
    const resourceButtons = document.getElementById('ResourceButtons');

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
    const resourceButtons = document.getElementById('ResourceButtons');

    if (resourceButtons) {
      resourceButtons.removeEventListener('click', this.handleResourceChange);
      resourceButtons.removeEventListener('touchend', this.handleResourceChange);
    }
  }

  render() {
    const { currentDeck, currentDeckName, currentResourceName } = this.state;

    return (
      <div className="wrap-everything">
        <MainNav handleResourceChange={this.handleResourceChange} />
        <section id="column-3" className="wrap-standard-full-width">
          <TopBar
            handleResourceChange={this.handleResourceChange}
            currentDeckName={currentDeckName}
            currentResourceName={currentResourceName}
          />
          <SubNav
            currentDeck={currentDeck}
            handleResourceChange={this.handleResourceChange}
          />
        </section>
      </div>
    );
  }
}

export default Dashboard;
