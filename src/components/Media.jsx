import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FaChevronLeft, FaChevronRight, FaSearchPlus, FaExpand } from 'react-icons/fa';

// Temporary placeholder images
const img1 = "https://via.placeholder.com/800x400?text=Image+1";
const img2 = "https://via.placeholder.com/800x400?text=Image+2";
const img3 = "https://via.placeholder.com/800x400?text=Image+3";

const Media = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const images = [img1, img2, img3];

  return (
    <div id="media" className="w-full bg-[#0f172a] py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-10 tracking-wide drop-shadow-md">
          Media
        </h2>

        <p className="text-gray-300 text-md sm:text-lg leading-relaxed mb-12">
          The Print media as well as the Television of Odisha as well as Mumbai also covering 
          the philanthropic activities done by Braj Gauri Trust in various times.
        </p>

        {/* Main Swiper */}
        <div className="relative bg-black rounded-lg shadow-lg">

          {/* Zoom and Expand Buttons */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
            <button className="bg-gray-700 p-2 rounded hover:bg-yellow-400 transition">
              <FaSearchPlus className="text-white" />
            </button>
            <button className="bg-gray-700 p-2 rounded hover:bg-yellow-400 transition">
              <FaExpand className="text-white" />
            </button>
          </div>

          <Swiper
            spaceBetween={10}
            navigation={{
              nextEl: '.next-button',
              prevEl: '.prev-button',
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className="h-96"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={`main-${idx}`}>
                <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
            <button className="prev-button bg-gray-700 p-2 rounded-full hover:bg-yellow-400 transition">
              <FaChevronLeft className="text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
            <button className="next-button bg-gray-700 p-2 rounded-full hover:bg-yellow-400 transition">
              <FaChevronRight className="text-white" />
            </button>
          </div>

        </div>

        {/* Thumbnail Swiper */}
        <div className="mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="h-24"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={`thumb-${idx}`}>
                <img src={img} alt={`Thumb ${idx + 1}`} className="object-cover h-full w-full rounded-md" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Media;
