// src/Lessons/Unit01/U01L01/U01L01.js
import React, { useState } from 'react';
import LessonItem from './LessonItem';

const ErrorsArray = [
	{
		id: 'No Lesson Selected',
		section: 'Unit 01',
		title: 'Lesson 01',
		subtitle: 'Intro to Problem Solving',
		content: 'Links to Files and Resources for Unit 01 Lesson 01 will go here!?!',
		activity: './Lessons/Unit01/ActivityGuide/U01_L01-ActivityGuide.pdf',
		slideshow: './Lessons/Unit01/Slideshows/U01_L01-Slideshow.pdf',
	},
	{
		id: 'U01L02',
		section: 'Unit 01',
		title: 'Lesson 02',
		subtitle: 'The Problem Solving Process',
		content: 'Links to Files and Resources for Unit 01 Lesson 02 will go here!?!',
		activity: './Lessons/Unit01/ActivityGuide/U01_L02-ActivityGuide.pdf',
		slideshow: './Lessons/Unit01/Slideshows/U01_L02-Slideshow.pdf',
	}
];


export { ErrorsArray };

const LessonArray = ({ lesson, selectedLessonId, setSelectedLessonId }) => {
	return (
		<div>
			<h1>{lesson.title}</h1>
			<p>{lesson.content}</p>
			<a href={lesson.activity}>Activity Guide</a>
			<a href={lesson.slideshow}>Slideshow</a>
		</div>
	);
};
export default LessonArray;
