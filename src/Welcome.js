import React from 'react';
import './assets/lcars-ultra-classic.css';
import './assets/lcars-colors.css';
import './assets/lcars.js';

const Welcome = () => {
  return (
    <main style={{ width: '100%', height: '100%' }}>
      <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: '100%' }}
        src="https://embed.figma.com/proto/5mLrcJhfHw27ueLCsII0NO/CompuTrek-LIVE?page-id=0%3A1&node-id=2-1117&node-type=canvas&viewport=1183%2C532%2C0.35&scaling=contain&content-scaling=fixed&starting-point-node-id=2%3A1117&embed-host=share"
        allowFullScreen>
      </iframe>
    </main>
  );
};

export default Welcome;
