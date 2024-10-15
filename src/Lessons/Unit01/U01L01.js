// src/Lessons/Unit01/U01L01/U01L01.js
import React from 'react';
import LessonTemplate from '../../components/LessonTemplate';
import '../../index.css';
import { Modal } from 'react-bootstrap';
import '../../styles/modal.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ThumbnailActivity from '../../assets/img/Thumbnail-ActivityGuide-min.jpg';
import ThumbnailSlideshow from '../../assets/img/Thumbnail-Slideshow-min.jpg';

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
      
      
      {/*<button onClick={handleShow}>Open Modal</button>*/}
      
      <Modal show={showActivityModal} onHide={handleCloseActivityModal}>
        <Modal.Header closeButton />
        <Modal.Body>Activity Modal Content</Modal.Body>
        <Modal.Footer />
      </Modal>
      
      <Modal show={showSlideshowModal} onHide={handleCloseSlideshowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Slideshow Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Slideshow Modal Content</Modal.Body>
        <Modal.Footer>
          {/* ... rest of your code */}
        </Modal.Footer>
      </Modal>
    </div>
  );
  
  return <LessonTemplate title={title} content={content}/>;
};

export default U01L01content;
