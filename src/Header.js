import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import React, { useState } from 'react';
export default function Header({ navItems }) {
  // Default nav items for homepage
  const defaultNav = [
    { label: 'HOME', link: '/', type: 'link' },
    { label: 'COLLECTIONS', link: '#collections', type: 'anchor' },
    { label: 'PRODUCTS', link: '#products', type: 'anchor' },
    { label: 'GALLERY', link: '/gallery', type: 'link' },
    { label: 'ABOUT', link: '/about', type: 'link' },
    { label: 'CONTACT', link: '/contact', type: 'link' },
  ];
  const items = navItems || defaultNav;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md fixed top-0 left-0 z-20">
      <div className="text-2xl font-serif tracking-widest font-bold text-gray-900">SUKALP</div>
      {/* Hamburger icon for mobile */}
      <button
        className="md:hidden text-2xl text-gray-700 hover:text-yellow-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {/* Desktop nav */}
      <div className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        {items.map((item, idx) =>
          item.type === 'link' ? (
            <Link key={item.label} to={item.link} className="hover:text-yellow-700 transition">{item.label}</Link>
          ) : (
            <a key={item.label} href={item.link} className="hover:text-yellow-700 transition">{item.label}</a>
          )
        )}
      </div>
      {/* Mobile nav menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-30 flex flex-col gap-4 py-4 px-8 md:hidden animate-fadeIn">
          {items.map((item, idx) =>
            item.type === 'link' ? (
              <Link key={item.label} to={item.link} className="hover:text-yellow-700 transition text-lg font-medium" onClick={() => setMenuOpen(false)}>{item.label}</Link>
            ) : (
              <a key={item.label} href={item.link} className="hover:text-yellow-700 transition text-lg font-medium" onClick={() => setMenuOpen(false)}>{item.label}</a>
            )
          )}
        </div>
      )}
      <div className="flex gap-4 items-center text-gray-700 text-xl">
        <button className="hover:text-yellow-700"><FaSearch /></button>
        <button className="hover:text-yellow-700"><FaUser /></button>
      </div>
    </nav>
  );
}
