import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  const [showCert, setShowCert] = useState(false);
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-white py-20 px-4">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-10 text-center">
          <div className="flex flex-col items-center mb-6">
            <img src="/logo.png" alt="Sukalp Logo" className="h-20 w-auto mb-2 drop-shadow-md" />
            <span className="text-lg font-serif italic font-semibold text-yellow-700" style={{letterSpacing: '0.04em', textShadow: '0 1px 6px #fff8e1'}}>We Think of Your Comfort</span>
          </div>
          <h1 className="text-5xl font-serif font-bold text-yellow-700 mb-6">About Sukalp</h1>
          <div className="flex flex-col items-center mb-6">
            <img
              src="/certificate.jpg"
              alt="Sukalp Certification"
              className="h-40 w-auto rounded shadow mb-2 border border-yellow-700 cursor-pointer transition-transform hover:scale-105"
              onClick={() => setShowCert(true)}
              title="Click to zoom"
            />
            <div className="text-base text-gray-700 max-w-md">
              <span className="font-semibold text-yellow-700">Certified Excellence:</span> Our company is officially registered and recognized for its commitment to quality and compliance. This certification is a testament to our transparent business practices, legal compliance, and dedication to customer trust. It assures our clients and partners that Sukalp Lifestyle Private Limited operates with the highest standards in the textile and lifestyle industry.
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <span className="font-semibold text-yellow-700">Sukalp</span> — where luxury meets tradition. Our premium textile and lifestyle brand is dedicated to bringing you the finest fabrics, bedding, and home furnishings, crafted with timeless sophistication and modern elegance.
          </p>
          <p className="text-base text-gray-600 mb-4">
            Every collection is a celebration of artistry, quality, and comfort. We source only the best materials and work with skilled artisans to ensure each piece is a masterpiece. Whether you are looking to elevate your home or find the perfect gift, Sukalp offers a curated selection for every taste.
          </p>
          <p className="text-base text-gray-600">
            Thank you for choosing Sukalp. Experience the difference of true premium living.
          </p>
        </div>
      </div>
      {/* Certificate Modal */}
      {showCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-3xl text-gray-700 hover:text-yellow-700 focus:outline-none"
              onClick={() => setShowCert(false)}
              aria-label="Close"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img src="/certificate.jpg" alt="Sukalp Certification Zoomed" className="w-full h-auto max-h-[70vh] rounded border border-yellow-700 object-contain" />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
