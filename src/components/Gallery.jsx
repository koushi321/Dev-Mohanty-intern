// import React, { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// const placeholderImages = [
//   { src: "https://via.placeholder.com/800x500?text=Image+1" },
//   { src: "https://via.placeholder.com/800x500?text=Image+2" },
//   { src: "https://via.placeholder.com/800x500?text=Image+3" },
// ];

// const galleryAlbums = [
//   { title: '2024 OTV News on Bahrain Odia Samaj Utkala Diwas Celebration', images: placeholderImages },
//   { title: '2019 Annual Function of DevLoka Public School', images: placeholderImages },
//   { title: '8th CII Global Summit on Skill Development', images: placeholderImages },
//   { title: "Teacher's Day Celebration", images: placeholderImages },
//   { title: "Children's Day Event", images: placeholderImages },
//   { title: "Science Exhibition 2023", images: placeholderImages },
//   { title: "Art and Craft Competition", images: placeholderImages },
//   { title: "Annual Sports Meet", images: placeholderImages },
//   { title: "Christmas Celebration", images: placeholderImages },
//   { title: "Republic Day Parade", images: placeholderImages },
//   { title: "Farewell Party 2023", images: placeholderImages },
//   { title: "Welcoming Freshers", images: placeholderImages },
//   { title: "Yoga Day Celebration", images: placeholderImages },
//   { title: "Educational Field Trip", images: placeholderImages },
//   { title: "Summer Camp Activities", images: placeholderImages },
//   { title: "Music and Dance Fest", images: placeholderImages },
//   { title: "Quiz Competition 2023", images: placeholderImages },
//   { title: "Plantation Drive", images: placeholderImages },
//   { title: "Blood Donation Camp", images: placeholderImages },
//   { title: "Alumni Meet 2024", images: placeholderImages },
// ];

// const GallerySection = () => {
//   const [open, setOpen] = useState(false);
//   const [slides, setSlides] = useState([]);

//   const openAlbum = (album) => {
//     if (album.images.length > 0) {
//       setSlides(album.images);
//       setOpen(true);
//     }
//   };

//   return (
//     <section id="gallery" className="py-16 px-6 bg-[#0f172a] min-h-screen">
//       <h2 className="text-4xl sm:text-5xl font-bold text-center text-orange-400 mb-12 font-serif tracking-wide">
//         Gallery
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {galleryAlbums.map((album, index) => (
//           <div
//             key={index}
//             className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
//             onClick={() => openAlbum(album)}
//           >
//             <div className="flex items-center justify-center bg-[#0f172a] w-full h-48">
//               <span className="text-gray-500">Click to View</span>
//             </div>
//             <div className="p-4">
//               <h3 className="text-white text-sm font-semibold text-center leading-snug">
//                 {album.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
//     </section>
//   );
// };

// export default GallerySection;
