import React, { useRef, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = galleryRef.current.scrollTop;
      const scrollHeight = galleryRef.current.scrollHeight;
      const clientHeight = galleryRef.current.clientHeight;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

      // Parallax effect for each gallery item
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      items.forEach(item => {
        const scrollSpeed = parseFloat(item.getAttribute('data-scroll-speed'));
        item.style.transform = `translateY(${scrollPercentage * scrollSpeed}px)`;
      });
    };

    galleryRef.current.addEventListener('scroll', handleScroll);

    return () => {
      galleryRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="gallery-container" ref={galleryRef}>
      <div className="gallery">
        <div className="gallery-item" data-scroll-speed="1">
          <img src="https://via.placeholder.com/800x400" alt="Image 1" />
          <div className="caption">Image 1</div>
        </div>
        <div className="gallery-item" data-scroll-speed="0.5">
          <img src="https://via.placeholder.com/800x400" alt="Image 2" />
          <div className="caption">Image 2</div>
        </div>
        <div className="gallery-item" data-scroll-speed="0.8">
          <img src="https://via.placeholder.com/800x400" alt="Image 3" />
          <div className="caption">Image 3</div>
        </div>
        <div className="gallery-item" data-scroll-speed="1.2">
          <img src="https://via.placeholder.com/800x400" alt="Image 4" />
          <div className="caption">Image 4</div>
        </div>
        {/* Add more gallery items as needed */}
      </div>
    </div>
  );
};

export default Gallery;
