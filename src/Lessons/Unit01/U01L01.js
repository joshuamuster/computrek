import React from 'react';
import LessonTemplate from '../../components/LessonTemplate';
import '../../index.css';
import { Modal } from 'react-bootstrap';
import '../../styles/modal.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ThumbnailActivity from '../../assets/img/Thumbnail-ActivityGuide.jpg';
import ThumbnailSlideshow from '../../assets/img/Thumbnail-Slideshow.jpg';
import ActivityGuide from './U01L01/U01_L01-ActivityGuide.pdf'; // Corrected path

const U01L01content = () => {
  const [showActivityModal, setShowActivityModal] = React.useState(false);
  const [showSlideshowModal, setShowSlideshowModal] = React.useState(false);

  const handleCloseActivityModal = () => setShowActivityModal(false);
  const handleShowActivityModal = () => setShowActivityModal(true);

  const handleCloseSlideshowModal = () => setShowSlideshowModal(false);
  const handleShowSlideshowModal = () => setShowSlideshowModal(true);

  const title = "Unit 01 - Lesson 01";
  const content = (
    <div>
      <p>Links to Files and Resources for Unit 01 Lesson 01 will go here!!!</p>
      <img className="lessonThumbnail" onClick={handleShowActivityModal} src={ThumbnailActivity}
           alt="Lesson Thumbnail"/>
      <img className="lessonThumbnail" onClick={handleShowSlideshowModal} src={ThumbnailSlideshow}
           alt="Lesson Thumbnail"/>

      <Modal show={showActivityModal} onHide={handleCloseActivityModal} size="lg" centered>
        {/*<Modal.Header closeButton />*/}
        <Modal.Body style={{ width: '100%', height: '80vh' }}>
          <iframe src={ActivityGuide} width="100%" height="100%" title="PDF"></iframe>
        </Modal.Body>
        {/*<Modal.Footer />*/}
      </Modal>

      <Modal show={showSlideshowModal} onHide={handleCloseSlideshowModal} size="lg" centered>
        {/*<Modal.Header closeButton>*/}
        {/*  <Modal.Title>Slideshow Modal Title</Modal.Title>*/}
        {/*</Modal.Header>*/}
        <Modal.Body style={{ width: '90vw', height: '90vh' }}>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQwJ0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0J0G0G0G0J0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0G0" />
        </Modal.Body>
        {/*<Modal.Footer>*/}
        {/*  /!* ... rest of your code *!/*/}
        {/*</Modal.Footer>*/}
      </Modal>
    </div>
  );

  return <LessonTemplate title={title} content={content}/>;
};

export default U01L01content;
