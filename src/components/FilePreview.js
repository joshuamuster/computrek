// src/components/FilePreview.js
import React from 'react';

const FilePreview = ({ file, onClick }) => {
  return (
    <div className="file-preview" onClick={() => onClick(file)}>
      <img src={file.thumbnail} alt={file.name} />
      <p>{file.name}</p>
    </div>
  );
};

export default FilePreview;
