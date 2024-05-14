import React, { useState, useEffect } from 'react';
import './Gallery.css';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.post("http://127.0.0.1:12345/photos")
      .then((res) => {
        setImages(res.data.images); // Assuming images are nested under `data` property
      })
      .catch((error) => {
        console.error('Error fetching images:', error.message);
      });
  }, []);



  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} data-scroll-speed="1">
            <img src={image.data} alt={`Image ${index + 1}`} />
            <div className="caption">{`${image.name}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
