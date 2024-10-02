// src/components/LessonTemplate.js
import React, { useState } from 'react';
import FilePreview from './FilePreview';
import Modal from './Modal';

const LessonTemplate = ({ title, content }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
    { name: 'Word Document', thumbnail: '/path/to/word-thumbnail.png', url: '/path/to/word-document.docx' },
    { name: 'PowerPoint Presentation', thumbnail: '/path/to/powerpoint-thumbnail.png', url: '/path/to/powerpoint-presentation.pptx' },
    { name: 'PDF Document', thumbnail: '/path/to/pdf-thumbnail.png', url: '/path/to/pdf-document.pdf' },
  ];

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleCloseModal = () => {
    setSelectedFile(null);
  };

  return (
    <div className="lesson-page">
      <h1>{title}</h1>
      <div className="lesson-content">
        {content}
      </div>
      <div className="file-previews">
        {files.map((file) => (
          <FilePreview key={file.name} file={file} onClick={handleFileClick} />
        ))}
      </div>
      {selectedFile && <Modal file={selectedFile} onClose={handleCloseModal} />}
    </div>
  );
};

export default LessonTemplate;
