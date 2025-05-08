// src/components/Companies.jsx
import React from "react";

const companies = [
  { 
    name: "ASMACS", 
    img: "/path-to-your-images/asmacs.png", 
    link: "#" 
  },
  { 
    name: "ASMACS Systems Solutions", 
    img: "/path-to-your-images/solutions.png", 
    link: "#" 
  },
  { 
    name: "Hunt Jobs Pvt Ltd", 
    img: "/path-to-your-images/huntjobs.png", 
    link: "#" 
  },
  { 
    name: "Espire System Pvt Ltd", 
    img: "/path-to-your-images/espire.png", 
    link: "#" 
  },
  { 
    name: "Albert A.Abela", 
    img: "/path-to-your-images/albert.png", 
    link: "#" 
  },
  { 
    name: "Krishna Tradings", 
    img: "/path-to-your-images/krishna.png", 
    link: "#" 
  },
  { 
    name: "Asmacs Tours & Travels", 
    img: "/path-to-your-images/tours.png", 
    link: "#" 
  },
  { 
    name: "Asmacs Qatar LLC", 
    img: "/path-to-your-images/qatar.png", 
    link: "#" 
  },
  { 
    name: "Asmacs General Trading Company WLL", 
    img: "/path-to-your-images/general.png", 
    link: "#" 
  },
];

const Companies = () => {
  return (
    <section className="bg-[#0f172a] py-12 px-4" id="companies">
      <h2 className="text-3xl font-bold text-center text-white mb-10">ASMACS GROUP OF COMPANIES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {companies.map((company, index) => (
          <a 
            key={index} 
            href={company.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img src={company.img} alt={company.name} className="h-20 mb-4" />
            <div className="border-t w-48 mb-2"></div>
            <p className="text-center">{company.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Companies;
