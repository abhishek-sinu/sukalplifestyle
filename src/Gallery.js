import React, { useState, useRef } from 'react';
import { FaSearch, FaBed, FaCouch, FaThLarge } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const galleryImages = [
  // Premium Fabrics
  { src: '/bath.png', category: 'Bath Linen', name: 'Bath Towel' },
  { src: '/beach.png', category: 'Bath Linen', name: 'Beach Towel' },
  { src: '/face.png', category: 'Bath Linen', name: 'Face Towel' },
  { src: '/hand.png', category: 'Bath Linen', name: 'Hand Towel' },
  { src: '/spa.png', category: 'Bath Linen', name: 'Spa Towel' },
  { src: '/Gym.png', category: 'Bath Linen', name: 'Gym Towel' },
  { src: '/bamboo.jpg', category: 'Bath Linen', name: 'Bamboo Pattern Towel' },
  { src: '/microfiber.jpg', category: 'Bath Linen', name: 'MicroFiber Towel' },
  { src: '/kids.png', category: 'Bath Linen', name: 'Kids Towel' },
  // Luxury Bedding
  { src: '/White Bed Sheet.png', category: 'Bed Linen', name: 'Premium Bedsheet Set' },
  { src: '/Printed Bed Sheet.png', category: 'Bed Linen', name: 'Premium Printed Bedsheet Set' },
  { src: '/Cotton Comforter.png', category: 'Bed Linen', name: 'Cotton Comforter' },
  { src: '/Duvet & Pillow Set.png', category: 'Bed Linen', name: 'Duvet & Pillow Set' },

  // Hospital Products (from public folder HP-*.png)
  { src: '/HP-Bed Sheet Green.png', category: 'Hospital Products', name: 'Bed Sheet Green' },
  { src: '/HP-Bed sheet.png', category: 'Hospital Products', name: 'Bed Sheet Blue' },
    { src: '/HP-White Bedsheet.png', category: 'Hospital Products', name: 'Bedsheet White' },
  { src: '/HP-Doctor Coat.png', category: 'Hospital Products', name: 'Doctor Coat Long' },
  { src: '/HP-Doctor Uniform.png', category: 'Hospital Products', name: 'Doctor Uniform Short' },
  { src: '/HP-Draw Sheet.png', category: 'Hospital Products', name: 'Draw Sheet' },
  { src: '/HP-ICU Uniform.png', category: 'Hospital Products', name: 'ICU Uniform' },
  { src: '/HP-O.T. Gown.png', category: 'Hospital Products', name: 'O.T. Gown' },
  { src: '/HP-O.T. Linen.png', category: 'Hospital Products', name: 'O.T. Linen' },
  { src: '/HP-Patient Uniform.png', category: 'Hospital Products', name: 'Patient Uniform Blue' },
  { src: '/HP-Patient Unifrom.png', category: 'Hospital Products', name: 'Patient Unifrom White' },
  { src: '/HP-pillow and pillow cover.png', category: 'Hospital Products', name: 'Pillow and Pillow Cover' },
  { src: '/HP-Scrub Suit Nurse.png', category: 'Hospital Products', name: 'Scrub Suit Nurse' },
  { src: '/HP-Scrub Suit.png', category: 'Hospital Products', name: 'Scrub Suit' },
  { src: '/HP-Staff Uniform.png', category: 'Hospital Products', name: 'Staff Uniform' }
];

const categories = [
  'All',
  'Bed Linen',
  'Bath Linen',
  'Hospitality',
  'Hospital Products',
  'Home Furnishing'
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [zoomImg, setZoomImg] = useState(null); // { src, name }
  const [highlightedProduct, setHighlightedProduct] = useState(null); // name of highlighted product
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Refs for each product card (callback refs)
  const productRefs = useRef({});

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);

  // Get unique product names for the selected category
  const productNames =
    activeCategory === 'All'
      ? [...new Set(galleryImages.map(img => img.name))]
      : [...new Set(galleryImages.filter(img => img.category === activeCategory).map(img => img.name))];

  // Filter product names by search term
  const searchedProductNames = searchTerm.trim() === ''
    ? productNames
    : productNames.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Scroll to product card and highlight
  const handleProductClick = (name) => {
    setHighlightedProduct(name);
    // Scroll to the first matching product card
    const node = productRefs.current[name];
    if (node && node.scrollIntoView) {
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // Remove highlight after 2 seconds
    setTimeout(() => setHighlightedProduct(null), 2000);
  };

  return (
    <div className="bg-[#f8f6f2] min-h-screen flex flex-col">
      <Header navItems={[
        { label: 'HOME', link: '/', type: 'link' },
        { label: 'GALLERY', link: '/gallery', type: 'link' }
      ]} />
      {/* Page Title Section */}
      <div className="relative py-20 px-4 bg-gradient-to-br from-[#e7e1d8] to-[#fff] flex flex-col items-center pt-32 md:pt-28">
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

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto flex flex-row gap-8 px-4 mb-20">
        {/* Mobile Sidebar Button */}
        <button
          className="block md:hidden fixed z-30 top-28 left-4 bg-[#101c36] text-white px-4 py-2 rounded-full shadow-lg focus:outline-none"
          onClick={() => setMobileSidebarOpen(true)}
          aria-label="Open product sidebar"
        >
          Search Products
        </button>

        {/* Sidebar for Product Names (Desktop) */}
        <aside className="hidden md:block w-64 bg-white rounded-2xl shadow-lg p-6 h-fit self-start sticky top-32 animate-fadeIn">
          <h2 className="text-xl font-bold mb-4 text-[#101c36] font-serif">{activeCategory === 'All' ? 'All Products' : activeCategory}</h2>
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search product..."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#101c36] text-[#101c36] bg-[#f8f6f2]"
            />
          </div>
          <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
            {searchedProductNames.length === 0 ? (
              <li className="text-gray-400 italic">No products</li>
            ) : (
              searchedProductNames.map((name, idx) => (
                <li
                  key={idx}
                  className="text-[#101c36] font-medium px-3 py-2 rounded hover:bg-[#e7e1d8] transition cursor-pointer"
                  onClick={() => handleProductClick(name)}
                >
                  {name}
                </li>
              ))
            )}
          </ul>
        </aside>

        {/* Sidebar Drawer for Mobile */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-30" onClick={() => setMobileSidebarOpen(false)}></div>
            {/* Drawer */}
            <aside className="relative w-72 max-w-full bg-white rounded-r-2xl shadow-2xl p-6 h-full animate-fadeIn z-50">
              <button
                className="absolute top-3 right-3 text-2xl text-gray-700 hover:text-[#C2410C] focus:outline-none"
                onClick={() => setMobileSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-[#101c36] font-serif">{activeCategory === 'All' ? 'All Products' : activeCategory}</h2>
              {/* Search Bar */}
              <div className="mb-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search product..."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#101c36] text-[#101c36] bg-[#f8f6f2]"
                />
              </div>
              <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                {searchedProductNames.length === 0 ? (
                  <li className="text-gray-400 italic">No products</li>
                ) : (
                  searchedProductNames.map((name, idx) => (
                    <li
                      key={idx}
                      className="text-[#101c36] font-medium px-3 py-2 rounded hover:bg-[#e7e1d8] transition cursor-pointer"
                      onClick={() => {
                        handleProductClick(name);
                        setMobileSidebarOpen(false);
                      }}
                    >
                      {name}
                    </li>
                  ))
                )}
              </ul>
            </aside>
          </div>
        )}

        {/* Gallery Grid Layout */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => {
            // Assign callback ref for each product name (first occurrence only)
            return (
              <div
                key={idx}
                ref={node => {
                  if (node) productRefs.current[img.name] = node;
                }}
                className={`relative rounded-2xl overflow-hidden shadow-lg bg-white group animate-fadeIn cursor-pointer border-4 transition-all duration-300 ${highlightedProduct === img.name ? 'border-[#C2410C]' : 'border-transparent'}`}
                style={{ animationDelay: `${idx * 0.20}s` }}
                onClick={() => setZoomImg(img)}
                title="Click to zoom"
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
            );
          })}
        </div>
      </div>
      {/* Modal for zoomed image */}
      {zoomImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-3xl text-gray-700 hover:text-yellow-700 focus:outline-none"
              onClick={() => setZoomImg(null)}
              aria-label="Close"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img src={zoomImg.src} alt={zoomImg.name} className="w-full h-auto max-h-[70vh] rounded object-contain mb-4" />
            <div className="text-xl font-serif font-bold text-yellow-700 text-center">{zoomImg.name}</div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
