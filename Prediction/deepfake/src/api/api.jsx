import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css'; // Import CSS for styling

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5050/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
<div className=''>
      <div className="glass-panel">
        <div className="file-upload-form">
          <div className="file-upload-input">
            <input
              type="file"
              onChange={handleChange}
              className="file-upload"
            />
          </div>
          <div className="file-upload-button">
            <button
              className="glassmorphic-button"
              onClick={handleSubmit}
            >
              Upload
            </button>
          </div>
          {result && (
            <div className="result-container">
              <p>Result: {result.result}</p>
              <p>Confidence: {result.confidence}</p>
            </div>
          )}
        </div>
      </div>
      </div>
  );
};

export default FileUpload;