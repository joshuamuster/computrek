import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

import ThumbnailActivity from './assets/img/Thumbnail-ActivityGuide.jpg';
import ThumbnailSlideshow from './assets/img/Thumbnail-Slideshow.jpg';

const ActivityGuides = () => {
	return (
		<main>
			<h1>Activity Guides</h1>
			<img className="lessonThumbnail" src={ThumbnailActivity} alt="Lesson Thumbnail"/>
			<img className="lessonThumbnail" src={ThumbnailSlideshow} alt="Lesson Thumbnail"/>
		</main>
	);
};

export default ActivityGuides;
