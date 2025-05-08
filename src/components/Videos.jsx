import React, { useState } from 'react';

const videos = [
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Sample Video 1",
  },
  {
    url: "https://www.w3schools.com/html/movie.mp4",
    title: "Sample Video 2",
  },
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Sample Video 3",
  },
];

const VideoBarSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? videos.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === videos.length - 1 ? 0 : index + 1);
  };

  const handleThumbnailClick = (idx) => {
    setIndex(idx);
  };

  return (
    <div id="videos" className="py-10 px-4 flex flex-col items-center">

      {/* Glowing Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-center mb-10 font-serif tracking-wide">
  Videos
</h2>

      {/* Main Video */}
      <div className="relative mt-4 mb-8 flex justify-center items-center w-full max-w-4xl">
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:left-4 text-yellow-400 bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition"
        >
          ❮
        </button>

        <video
          controls
          src={videos[index].url}
          className="w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] object-cover rounded-lg shadow-lg border-2 border-yellow-400 transition-all duration-300"
        />

        <button
          onClick={handleNext}
          className="absolute right-0 sm:right-4 text-yellow-400 bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition"
        >
          ❯
        </button>
      </div>

      {/* Video Title */}
      <h3 className="text-2xl text-yellow-300 font-semibold mb-6">
        {videos[index].title}
      </h3>

      {/* Thumbnails Row */}
      <div className="flex gap-4 overflow-x-auto justify-center">
        {videos.map((video, idx) => (
          <video
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            src={video.url}
            className={`w-28 h-16 rounded-md object-cover cursor-pointer border-2 ${
              idx === index ? 'border-yellow-400' : 'border-gray-400'
            } hover:border-yellow-400 transition`}
            muted
          />
        ))}
      </div>
    </div>
  );
};

export default VideoBarSlider;
