import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-white py-20 px-4">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-yellow-700 mb-6">About Sukalp</h1>
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
      <Footer />
    </>
  );
}
