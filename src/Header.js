import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import SukalpLogoImageCircle from './SukalpLogoImageCircle';
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
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-0 sm:gap-3 min-w-[210px]">
          <Link to="/">
            <SukalpLogoImageCircle />
          </Link>
          <span className="block text-sm sm:text-base font-serif italic font-semibold text-yellow-600 drop-shadow-sm text-center sm:text-left" style={{letterSpacing: '0.04em', textShadow: '0 1px 6px #fff8e1'}}>
            We Think of Your Comfort
          </span>
        </div>
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
      {/* Mobile nav menu - slide in from right */}
      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 w-screen h-screen md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
          <div className="absolute top-0 right-0 h-full w-full max-w-7xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl flex flex-col gap-4 py-8 px-8 transform transition-transform duration-300">
            <button
              className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-yellow-700 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="mt-8" />
            {items.map((item, idx) =>
              item.type === 'link' ? (
                <Link key={item.label} to={item.link} className="hover:text-yellow-700 transition text-lg font-medium" onClick={() => setMenuOpen(false)}>{item.label}</Link>
              ) : (
                <a key={item.label} href={item.link} className="hover:text-yellow-700 transition text-lg font-medium" onClick={() => setMenuOpen(false)}>{item.label}</a>
              )
            )}
          </div>
        </div>
      )}
      {/* <div className="flex gap-4 items-center text-gray-700 text-xl">
        <button className="hover:text-yellow-700"><FaSearch /></button>
        <button className="hover:text-yellow-700"><FaUser /></button>
      </div> */}
      </div>
    </nav>
  );
}
