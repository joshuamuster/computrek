import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

const DeckMain = () => {
	return (
		<main>
			<h1 className="">Welcome Aboard • <span className="go-tomato">C.S.S. Odyssey</span></h1>
			<p>This content will be the slideshows.</p>
			<p>Live long and prosper. 🖖</p>
			<footer>
				<div className="footer-inside">
					<div className="footer-text">
						<p>Don't forget to submit your project before you leave!</p>
						{/* <p>LCARS Inspired Website Template by <a href="https://www.thelcars.com">www.TheLCARS.com</a></p> */}
					</div>
				</div>
				<div className="footer-panel"><span className="hop">22</span>47</div>
			</footer>
		</main>
	);
};

export default DeckMain;
