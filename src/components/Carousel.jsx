import React, { useState } from 'react';
import proj1 from '../img/1.jpg';
import proj2 from '../img/2.jpg';
import proj3 from '../img/3.jpg';
import proj4 from '../img/4.jpg';

const images = [
    proj1, proj2, proj3, proj4
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-96 h-64 overflow-hidden rounded-2xl">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-cover transition-transform duration-500" />
      <div className="absolute inset-0 flex justify-between items-center">
        <button onClick={prevSlide} className="bg-white p-2 rounded-full">Previous</button>
        <button onClick={nextSlide} className="bg-white p-2 rounded-full">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
