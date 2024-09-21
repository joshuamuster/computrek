import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

const Deck07 = () => {
	return (
		<main>
			<h1>Deck 07</h1>
			<h2>Welcome to <span className="go-tomato">CompuTrek</span> • Classic LCARS</h2>
			<p>This content will be the slideshows.</p>
			<p>Live long and prosper.</p>
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

export default Deck07;
