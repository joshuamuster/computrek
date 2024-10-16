import React from 'react';
import LessonTemplate from '../../components/LessonTemplate';
import '../../index.css';
import '../../styles/modal.css';
import ThumbnailActivity from '../../assets/img/Thumbnail-ActivityGuide.jpg';
import ThumbnailSlideshow from '../../assets/img/Thumbnail-Slideshow.jpg';
import ActivityGuide from './U01L01/U01_L01-ActivityGuide.pdf';
import LessonModal from '../../components/LessonModal';

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
      <p>This lesson is a fun introduction to the open-ended, collaborative, and creative problem-solving students will be using over the rest of this unit and course.</p>
      <img className="lessonThumbnail" onClick={handleShowActivityModal} src={ThumbnailActivity} alt="Lesson Thumbnail"/>
      <img className="lessonThumbnail" onClick={handleShowSlideshowModal} src={ThumbnailSlideshow} alt="Lesson Thumbnail"/>

      <LessonModal
        show={showActivityModal}
        handleClose={handleCloseActivityModal}
        src={ActivityGuide}
        title="PDF"
        width="100%"
        height="80vh"
      />

      <LessonModal
        show={showSlideshowModal}
        handleClose={handleCloseSlideshowModal}
        src="https://docs.google.com/presentation/d/e/2PACX-1vTSGD0SvCs6CtvEiAUzhWmM4rcvLKzxj0c9SVRKdtQtO5CTIQHiaXCCWnb9ClOeJw6Cb4EKZBEQ0iY9/embed?start=false&loop=false&delayms=6000000"
        title="Google Slides"
        width="90vw"
        height="90vh"
      />
    </div>
  );

  return <LessonTemplate title={title} content={content}/>;
};

export default U01L01content;
