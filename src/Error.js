import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

const ErrorsArray = [
	{
		errorID: 'noLessonSelected',
		title: 'No Lesson Selected',
		activity: './Lessons/Unit01/ActivityGuide/U01_L01-ActivityGuide.pdf',
		slideshow: './Lessons/Unit01/Slideshows/U01_L01-Slideshow.pdf',
	},
	{
		errorID: 'noSuchFile',
		title: 'File Does Not Exist',
		activity: './Lessons/Unit01/ActivityGuide/U01_L02-ActivityGuide.pdf',
		slideshow: './Lessons/Unit01/Slideshows/U01_L02-Slideshow.pdf',
	}
];


export { ErrorsArray };

const ErrorMessage = () => {
	return (
		<h1>Please Select a Lesson first.</h1>
	);
};

export default ErrorMessage;
