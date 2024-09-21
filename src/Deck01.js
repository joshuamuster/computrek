import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

const Deck01 = () => {
	return (
		<main>
			<h1>Reporting For Duty On <span className="go-tomato">Deck 01</span></h1>
			<p>This content will be the slideshows.</p>
			<p>Live long and prosper.</p>
			<footer>
				<div className="footer-inside">
					<div className="footer-text">
						<p>Don't forget to submit your project before you leave!</p>
					</div>
				</div>
				<div className="footer-panel"><span className="hop">22</span>47</div>
			</footer>
		</main>
	);
};

export default Deck01;
