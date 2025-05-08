import React from 'react'
import Navbar from './Navbar'
import PhotoBarSlider from './PhotoBarSlider'
import Biography from './Biography'
import SocialResponsibility from './SocialResponsibility'
import Awards from './Awards'
import Media from './Media'
import Videos from './Videos'
import Gallery from './Gallery'
import ContactMe from './ContactMe'
import Companies from './Companies'
import SocialMedia from './SocailMedia'
import Footer from './Footer'

const Hero = () => {
  return (
    <div className='relative w-full min-h-screen bg-[#0f172a] text-center pt-24 overflow-hidden'>

      {/* 🔵 Floating blurred blob */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-pulse z-0"></div>

      {/* ⚪ Dot-grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 z-0 pointer-events-none"></div>

      {/* 🌟 Main content (above blobs and grid) */}
      <div className='relative z-10'>
        <Navbar />

        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 tracking-wide drop-shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105'>
          Dr. <span className='text-slate-300'>DEV MOHANTY</span>
        </h1>

        <div className='mt-4 w-16 h-[2px] bg-yellow-400 mx-auto rounded-full shadow-yellow-400 shadow-sm'></div>

        <PhotoBarSlider />
        <Biography />
        <SocialResponsibility />
        <Awards />
        <Media />
        <Videos />
        <Gallery />
        <ContactMe />
        <Companies />
        <SocialMedia />
        <Footer />
      </div>
    </div>
  )
}

export default Hero
