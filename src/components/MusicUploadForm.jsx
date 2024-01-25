import React, { useContext, useRef, useState } from "react";
import { MusicContext } from "../App";

import "./MusicUploadForm.css";

const MusicUploadForm = () => {
  // Getting uploaded songs and state update function
  const { songs, setSongs } = useContext(MusicContext);

  // Using Ref for get music info from uploaded file
  const inputRef = useRef(null);

  // Using useState with default value false for modal open/close functionality
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);

    // Reset progress when closing the modal
    setUploadProgress(0);
  };

  const handleUpload = () => {
    //Getting uploaded file info
    const uploadedFile = inputRef.current.files[0];

    if (uploadedFile) {
      // Using regex to get artist name and song name
      const artistName = uploadedFile.name.match(/^(.*?)(?=\s*-\s*)/);
      const songName = uploadedFile.name.match(/(?<=-\s*)[^-.]+/);

      // Simulating upload progress
      const totalSize = 50;
      let loadedSize = 0;
      const interval = setInterval(() => {
        // Simulating upload progress
        loadedSize += Math.random() * 10;
        const progress = (loadedSize / totalSize) * 100;
        setUploadProgress(progress);

        if (progress >= 100) {
          clearInterval(interval);

          //Setting uploaded song
          setSongs([
            ...songs,
            {
              songName: songName[0],
              artistName: artistName[0],
            },
          ]);
          closeModal();
        }
      }, 500);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div>
      <button onClick={openModal}>Upload</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Upload Music</h2>
            <input type="file" accept=".mp3, .wav" ref={inputRef} />
            <button onClick={handleUpload}>Upload</button>
            <button onClick={closeModal}>Cancel</button>
            <progress value={uploadProgress} max={100} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicUploadForm;
