import React, { useState } from 'react';
import '../assets/lcars-ultra-classic.css';
import '../assets/lcars-colors.css';
import '../assets/lcars.js';
import Modal from './Modal';
import DeckLayout from '../DeckLayout';

const TopBar = ({ handleResourceChange, handleDeckChange, currentDeckName, currentResourceName }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="top-bar">
      <div className="wrap">
        <div className="scroll-top"><a id="scroll-top" href=""><span className="hop">screen</span> top</a></div>
        <div className="left-frame-top" onClick={handleOpenModal}>
          <div className="panel-2">Deck<span className="hop"> Layout</span></div>
        </div>
        <div className="right-frame-top">
          <div className="columns-container">
            <div className="right-column">
              <div className="banner go-ice">{currentDeckName} • <span className="blink go-galaxy">Active</span>
              </div>
              <h1 className="go-tomato" style={{margin: 0}}>{currentResourceName || 'Resource Index'}</h1>
            </div>
          </div>
          <div className="bar-panel first-bar-panel">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`bar-${i + 1}`}></div>
            ))}
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <DeckLayout />
      </Modal>
    </section>
  );
};

export default TopBar;
