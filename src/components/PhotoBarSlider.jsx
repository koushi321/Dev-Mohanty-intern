import React, { useState } from 'react';

const images = [
  'assets/H1.jpg',
  'assets/H2.jpeg',
  'assets/H3.jpeg',
  'assets/H4.jpeg',
  'assets/H5.jpeg',
  'assets/H6.jpg',
  'assets/H7.jpg',
  'assets/H8.jpg',
  'assets/H9.gif',
];

const PhotoBarSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className='relative mt-6 mb-10 flex justify-center items-center'>
      <button
        onClick={handlePrev}
        className='absolute left-0 sm:left-8 text-yellow-400 bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition'
      >
        ❮
      </button>

      <img
  src={images[index]}
  alt={`Slide ${index}`}
  className='w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] object-cover rounded-lg shadow-lg border-2 border-yellow-400 transition-all duration-300'  
/>


      <button
        onClick={handleNext}
        className='absolute right-0 sm:right-8 text-yellow-400 bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition'
      >
        ❯
      </button>
    </div>
  );
};

export default PhotoBarSlider;
