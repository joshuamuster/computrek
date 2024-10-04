// src/Lessons/Unit01/U01L01/U01L01.js
import React, { useState } from 'react';

const Unit01Array = [
	{
		id: 'U01L01',
		title: 'Unit 01 - Lesson 01',
		content: 'Links to Files and Resources for Unit 01 Lesson 01 will go here!?!',
	},
	{
		id: 'U01L02',
		title: 'Unit 01 - Lesson 02',
		content: 'Links to Files and Resources for Unit 01 Lesson 02 will go here!?!',
	},
	{
		id: 'U01L03',
		title: 'Unit 01 - Lesson 03',
		content: 'Links to Files and Resources for Unit 01 Lesson 03 will go here!?!',
	},
	{
		id: 'U01L04',
		title: 'Unit 01 - Lesson 04',
		content: 'Links to Files and Resources for Unit 01 Lesson 04 will go here!?!',
	},
	{
		id: 'U01L05',
		title: 'Unit 01 - Lesson 05',
		content: 'Links to Files and Resources for Unit 01 Lesson 05 will go here!?!',
	},
	{
		id: 'U01L06',
		title: 'Unit 01 - Lesson 06',
		content: 'Links to Files and Resources for Unit 01 Lesson 06 will go here!?!',
	},
	{
		id: 'U01L07',
		title: 'Unit 01 - Lesson 07',
		content: 'Links to Files and Resources for Unit 01 Lesson 07 will go here!?!',
	},
	{
		id: 'U01L08',
		title: 'Unit 01 - Lesson 08',
		content: 'Links to Files and Resources for Unit 01 Lesson 08 will go here!?!',
	},
];

const Unit02Array = [
	{
		id: 'U02L01',
		title: 'Unit 02 - Lesson 01',
		content: 'Links to Files and Resources for Unit 02 Lesson 01 will go here!?!',
	},
	{
		id: 'U02L02',
		title: 'Unit 02 - Lesson 02',
		content: 'Links to Files and Resources for Unit 02 Lesson 02 will go here!?!',
	},
	{
		id: 'U02L03',
		title: 'Unit 02 - Lesson 03',
		content: 'Links to Files and Resources for Unit 02 Lesson 03 will go here!?!',
	},
	{
		id: 'U02L04',
		title: 'Unit 02 - Lesson 04',
		content: 'Links to Files and Resources for Unit 02 Lesson 04 will go here!?!',
	},
	{
		id: 'U02L05',
		title: 'Unit 02 - Lesson 05',
		content: 'Links to Files and Resources for Unit 02 Lesson 05 will go here!?!',
	},
	{
		id: 'U02L06',
		title: 'Unit 02 - Lesson 06',
		content: 'Links to Files and Resources for Unit 02 Lesson 06 will go here!?!',
	},
	{
		id: 'U02L07',
		title: 'Unit 02 - Lesson 07',
		content: 'Links to Files and Resources for Unit 02 Lesson 07 will go here!?!',
	},
	{
		id: 'U02L08',
		title: 'Unit 02 - Lesson 08',
		content: 'Links to Files and Resources for Unit 02 Lesson 08 will go here!?!',
	},
	{
		id: 'U02L09',
		title: 'Unit 02 - Lesson 09',
		content: 'Links to Files and Resources for Unit 02 Lesson 09 will go here!?!',
	},
	{
		id: 'U02L10',
		title: 'Unit 02 - Lesson 10',
		content: 'Links to Files and Resources for Unit 02 Lesson 10 will go here!?!',
	},
	{
		id: 'U02L11',
		title: 'Unit 02 - Lesson 11',
		content: 'Links to Files and Resources for Unit 02 Lesson 11 will go here!?!',
	},
	{
		id: 'U02L12',
		title: 'Unit 02 - Lesson 12',
		content: 'Links to Files and Resources for Unit 02 Lesson 12 will go here!?!',
	},
	{
		id: 'U02L13',
		title: 'Unit 02 - Lesson 13',
		content: 'Links to Files and Resources for Unit 02 Lesson 13 will go here!?!',
	},
	{
		id: 'U02L14',
		title: 'Unit 02 - Lesson 14',
		content: 'Links to Files and Resources for Unit 02 Lesson 14 will go here!?!',
	},
	{
		id: 'U02L15',
		title: 'Unit 02 - Lesson 15',
		content: 'Links to Files and Resources for Unit 02 Lesson 15 will go here!?!',
	},
	{
		id: 'U02L16',
		title: 'Unit 02 - Lesson 16',
		content: 'Links to Files and Resources for Unit 02 Lesson 16 will go here!?!',
	},
	{
		id: 'U02L17',
		title: 'Unit 02 - Lesson 17',
		content: 'Links to Files and Resources for Unit 02 Lesson 17 will go here!?!',
	},
	{
		id: 'U02L18',
		title: 'Unit 02 - Lesson 18',
		content: 'Links to Files and Resources for Unit 02 Lesson 18 will go here!?!',
	},
	{
		id: 'U02L19',
		title: 'Unit 02 - Lesson 19',
		content: 'Links to Files and Resources for Unit 02 Lesson 19 will go here!?!',
	},
	{
		id: 'U02L20',
		title: 'Unit 02 - Lesson 20',
		content: 'Links to Files and Resources for Unit 02 Lesson 20 will go here!?!',
	},
	{
		id: 'U02L21',
		title: 'Unit 02 - Lesson 21',
		content: 'Links to Files and Resources for Unit 02 Lesson 21 will go here!?!',
	},
];

const Unit01 = () => {
	const [selectedLessonId, setSelectedLessonId] = useState(null);
	
	return (
		<div>
			{lessons.map(lesson => (
				<LessonArray key={lesson.id} lesson={lesson} selectedLessonId={selectedLessonId} setSelectedLessonId={setSelectedLessonId} />
			))}
		</div>
	);
};

export default LessonArray;

// // src/Lessons/Unit01/U01L01/U01L01.js
// import React from 'react';
// import LessonTemplate from '../../components/LessonTemplate';
//
// const U01L01content = () => {
//   const title = "Unit 01 - LessonArray 01";
//   const content = "Links to Files and Resources for Unit 01 LessonArray 01 will go here!!!";
//
//   return <LessonTemplate title={title} content={content} />;
// };
//
// export default U01L01content;
