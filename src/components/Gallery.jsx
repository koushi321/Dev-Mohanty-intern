import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Lightbox styles

const galleryAlbums = [
  { title: '2024 OTV News on Bahrain Odia Samaj Utkala Diwas Celebration', images: [] },
  { title: '2019 Annual Function of DevLoka Public School', images: [] },
  { title: '8th CII Global Summit on Skill Development', images: [] },
  { title: 'Teacher\'s Day Celebration', images: [] },
  { title: 'Children\'s Day Event', images: [] },
  { title: 'Science Exhibition 2023', images: [] },
  { title: 'Art and Craft Competition', images: [] },
  { title: 'Annual Sports Meet', images: [] },
  { title: 'Christmas Celebration', images: [] },
  { title: 'Republic Day Parade', images: [] },
  { title: 'Farewell Party 2023', images: [] },
  { title: 'Welcoming Freshers', images: [] },
  { title: 'Yoga Day Celebration', images: [] },
  { title: 'Educational Field Trip', images: [] },
  { title: 'Summer Camp Activities', images: [] },
  { title: 'Music and Dance Fest', images: [] },
  { title: 'Quiz Competition 2023', images: [] },
  { title: 'Plantation Drive', images: [] },
  { title: 'Blood Donation Camp', images: [] },
  { title: 'Alumni Meet 2024', images: [] },
];

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openAlbum = (index) => {
    setAlbumIndex(index);
    setPhotoIndex(0);
    setIsOpen(true);
  };

  return (
    <section
      id="gallery"
      className="py-16 px-6 bg-[#0f172a] min-h-screen"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-orange-400 mb-12 font-serif tracking-wide">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {galleryAlbums.map((album, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => openAlbum(index)}
          >
            <div className="flex items-center justify-center bg-[#0f172a] w-full h-48">
              <span className="text-gray-500">No Image Yet</span>
            </div>
            <div className="p-4">
              <h3 className="text-white text-sm font-semibold text-center leading-snug">
                {album.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {isOpen && galleryAlbums[albumIndex].images.length > 0 && (
        <Lightbox
          mainSrc={galleryAlbums[albumIndex].images[photoIndex]}
          nextSrc={galleryAlbums[albumIndex].images[(photoIndex + 1) % galleryAlbums[albumIndex].images.length]}
          prevSrc={galleryAlbums[albumIndex].images[(photoIndex + galleryAlbums[albumIndex].images.length - 1) % galleryAlbums[albumIndex].images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + galleryAlbums[albumIndex].images.length - 1) % galleryAlbums[albumIndex].images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryAlbums[albumIndex].images.length)
          }
        />
      )}
    </section>
  );
};

export default GallerySection;
