// src/components/Modal.js
import React, { useEffect } from 'react';

const Modal = ({ file, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <iframe src={file.url} title={file.name} width="100%" height="100%"></iframe>
      </div>
    </div>
  );
};

export default Modal;
