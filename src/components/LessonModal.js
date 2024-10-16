// src/components/ReusableModal.js
import React from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/modal.css';

const LessonModal = ({ show, handleClose, src, title, width = '100%', height = '80vh' }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton />
      <Modal.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width, height }}>
        <iframe src={src} width="100%" height="100%" title={title}></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default LessonModal;
