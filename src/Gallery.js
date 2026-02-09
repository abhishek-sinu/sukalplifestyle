import React, { useState } from 'react';
import { FaSearch, FaBed, FaCouch, FaThLarge } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const galleryImages = [
  // Premium Fabrics
  { src: '/bath.png', category: 'Premium Fabrics', name: 'Bath Towel' },
  { src: '/beach.png', category: 'Premium Fabrics', name: 'Beach Towel' },
  { src: '/face.png', category: 'Premium Fabrics', name: 'Face Towel' },
  { src: '/hand.png', category: 'Premium Fabrics', name: 'Hand Towel' },
  { src: '/spa.png', category: 'Premium Fabrics', name: 'Spa Towel' },
  { src: '/Gym.png', category: 'Premium Fabrics', name: 'Gym Towel' },
  { src: '/bamboo.jpg', category: 'Premium Fabrics', name: 'Gym Towel' },
  { src: '/microfiber.jpg', category: 'Premium Fabrics', name: 'Gym Towel' },
  { src: '/kids.png', category: 'Premium Fabrics', name: 'Gym Towel' },
  // Luxury Bedding
  { src: '/White Bed Sheet.png', category: 'Luxury Bedding', name: 'Premium Bedsheet Set' },
   { src: '/Printed Bed Sheet.png', category: 'Luxury Bedding', name: 'Premium Printed Bedsheet Set' },
  { src: '/Cotton Comforter.png', category: 'Luxury Bedding', name: 'Cotton Comforter' },
  { src: '/Duvet & Pillow Set.png', category: 'Luxury Bedding', name: 'Duvet & Pillow Set' },
];

const categories = [
  'All',
  'Premium Fabrics',
  'Luxury Bedding'
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-[#f8f6f2] min-h-screen flex flex-col">
      <Header navItems={[
        { label: 'HOME', link: '/', type: 'link' },
        { label: 'GALLERY', link: '/gallery', type: 'link' }
      ]} />
      {/* Page Title Section */}
        <div className="relative py-20 px-4 bg-gradient-to-br from-[#e7e1d8] to-[#fff] flex flex-col items-center pt-24 md:pt-28">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#101c36] mb-4 tracking-tight animate-fadeIn">Premium Gallery</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn">Explore our finest fabrics, bedding, and home furnishings.</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 mt-4 animate-fadeIn">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition shadow-sm border ${
              activeCategory === cat
                ? 'bg-[#101c36] text-white border-[#101c36]'
                : 'bg-white text-[#101c36] border-gray-300 hover:bg-[#e7e1d8]'
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-20">
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-white group animate-fadeIn"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex items-end">
              <div className="w-full p-6 text-white font-serif text-xl font-bold">{img.name}</div>
            </div>
          </div>
        ))}
      </div>    
      <Footer />
    </div>
  );
}
