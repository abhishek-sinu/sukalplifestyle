import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center bg-white py-20 px-4">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-10">
          {/* Left: Contact Info */}
          <div>
            <div className="uppercase tracking-widest text-yellow-700 font-semibold text-sm mb-2">Get in Touch</div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#101c36] mb-6 leading-tight">
              We'd Love to <span className="italic text-yellow-700">Hear from You</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 font-medium max-w-lg mb-8">
              Whether you have a question about our products, need styling advice, or want to explore a partnership — our team is here to help.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-yellow-100 p-3 rounded">
                  <FaMapMarkerAlt className="text-yellow-700 w-6 h-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Visit Us</div>
                  <div className="text-gray-600 text-sm">42 Mahal Road, Central District<br />Mumbai, Maharashtra 400001</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-yellow-100 p-3 rounded">
                  <FaPhoneAlt className="text-yellow-700 w-6 h-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-600 text-sm">+91 22 4567 8900</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-yellow-100 p-3 rounded">
                  <FaEnvelope className="text-yellow-700 w-6 h-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-600 text-sm">hello@sukalplifestyle.com</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-700" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-700" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input type="text" placeholder="How can we help?" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea placeholder="Tell us what you're looking for..." className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-700" rows={5}></textarea>
            </div>
            <button type="submit" className="mt-4 w-full md:w-auto px-8 py-3 bg-yellow-600 text-white font-semibold rounded shadow hover:bg-yellow-600 transition flex items-center justify-center gap-2">
              <span>&rarr;</span> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
