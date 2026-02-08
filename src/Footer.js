import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#101c36] text-white pt-16 pb-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Social */}
        <div>
          <div className="text-3xl font-serif font-bold tracking-widest mb-4">SUKALP</div>
          <p className="text-gray-300 mb-6">
            Crafting premium textiles and lifestyle products with timeless elegance since 1975. Every thread tells a story of luxury, comfort, and uncompromising quality.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-gray-500 rounded hover:bg-yellow-700 hover:border-yellow-700 transition"><FaInstagram className="w-5 h-5" /></a>
            <a href="#" className="p-2 border border-gray-500 rounded hover:bg-yellow-700 hover:border-yellow-700 transition"><FaFacebookF className="w-5 h-5" /></a>
            <a href="#" className="p-2 border border-gray-500 rounded hover:bg-yellow-700 hover:border-yellow-700 transition"><FaTwitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 border border-gray-500 rounded hover:bg-yellow-700 hover:border-yellow-700 transition"><FaYoutube className="w-5 h-5" /></a>
          </div>
        </div>
        {/* Shop */}
        <div>
          <div className="uppercase text-yellow-500 font-semibold text-sm mb-4 tracking-widest">Shop</div>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-yellow-400">Bedding</a></li>
            <li><a href="#" className="hover:text-yellow-400">Bath</a></li>
            <li><a href="#" className="hover:text-yellow-400">Furnishings</a></li>
            <li><a href="#" className="hover:text-yellow-400">Fabrics</a></li>
            <li><a href="#" className="hover:text-yellow-400">New Arrivals</a></li>
            <li><a href="#" className="hover:text-yellow-400">Sale</a></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="uppercase text-yellow-500 font-semibold text-sm mb-4 tracking-widest">Company</div>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Our Story</a></li>
            <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-400">Press</a></li>
            <li><a href="#" className="hover:text-yellow-400">Sustainability</a></li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <div className="uppercase text-yellow-500 font-semibold text-sm mb-4 tracking-widest">Support</div>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">FAQs</a></li>
            <li><a href="#" className="hover:text-yellow-400">Shipping</a></li>
            <li><a href="#" className="hover:text-yellow-400">Returns</a></li>
            <li><a href="#" className="hover:text-yellow-400">Size Guide</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <div>© {new Date().getFullYear()} Sukalp. All rights reserved. Crafted with passion.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400">Terms of Service</a>
          <a href="#" className="hover:text-yellow-400">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
