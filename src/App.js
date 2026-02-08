import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[100vh] pt-32 pb-24 px-8 bg-gradient-to-br from-[#0a183d]/80 to-[#fff]/60">
        <img
          src="/hero-banner.jpg"
          alt="Luxury Fabric Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80"
        />
        <div className="relative z-10 max-w-2xl text-left">
          <div className="uppercase tracking-widest text-yellow-600 font-semibold text-sm mb-2">Premium Textile & Lifestyle</div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-lg leading-tight">
            Crafted for <span className="italic text-yellow-300">Elegance</span>
          </h1>
          <p className="mt-6 text-lg text-white/90 font-medium max-w-lg">
            Discover our curated collection of premium fabrics, bedding, and home furnishings — designed with timeless sophistication.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded shadow hover:bg-yellow-600 transition">EXPLORE COLLECTIONS</a>
            <a href="#" className="px-8 py-3 border border-white text-white font-semibold rounded shadow hover:bg-white hover:text-yellow-700 transition">OUR STORY</a>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section id="collections" className="bg-[#faf8f5] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="uppercase tracking-widest text-yellow-700 font-semibold text-sm mb-2">Our Collections</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">Shop by Category</h2>
            <div className="mx-auto w-24 h-1 bg-yellow-500 rounded mt-2 mb-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bedding */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src="/category-bedding.jpg" alt="Bedding" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <div className="uppercase text-yellow-400 text-xs font-semibold tracking-widest mb-1">Luxurious Comfort</div>
                <div className="text-2xl font-serif font-bold text-white">Bedding</div>
              </div>
            </div>
            {/* Bath */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src="/category-bath.jpg" alt="Bath" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <div className="uppercase text-yellow-400 text-xs font-semibold tracking-widest mb-1">Spa Experience</div>
                <div className="text-2xl font-serif font-bold text-white">Bath</div>
              </div>
            </div>
            {/* Furnishings */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src="/category-furnishing-DhuIuprn.jpg" alt="Furnishings" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <div className="uppercase text-yellow-400 text-xs font-semibold tracking-widest mb-1">Elevated Living</div>
                <div className="text-2xl font-serif font-bold text-white">Furnishings</div>
              </div>
            </div>
            {/* Fabrics */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src="/category-fabrics.jpg" alt="Fabrics" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <div className="uppercase text-yellow-400 text-xs font-semibold tracking-widest mb-1">Raw Luxury</div>
                <div className="text-2xl font-serif font-bold text-white">Fabrics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Featured Products</h2>
            <a href="#" className="text-gray-500 text-base font-semibold tracking-widest border-b border-gray-300 hover:text-yellow-700 hover:border-yellow-700 transition">VIEW ALL PRODUCTS</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <span className="absolute top-6 left-6 bg-yellow-600 text-white text-xs font-bold px-4 py-1 rounded uppercase tracking-widest z-20">Bestseller</span>
              <img src="/product-1.jpg" alt="White Sheets" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Product 2 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <span className="absolute top-6 left-6 bg-yellow-600 text-white text-xs font-bold px-4 py-1 rounded uppercase tracking-widest z-20">New Arrival</span>
              <img src="/product-2.jpg" alt="Blue Pillows" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Product 3 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <img src="/product-3.jpg" alt="White Robe" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Product 4 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <span className="absolute top-6 left-6 bg-yellow-600 text-white text-xs font-bold px-4 py-1 rounded uppercase tracking-widest z-20">Trending</span>
              <img src="/product-4.jpg" alt="Blue Throw" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
                 {/* Heritage/About Section */}
            <section className="bg-[#faf8f5] py-20 px-4">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Image */}
                <div className="flex-1 w-full">
                  <img src="/about-banner.jpg" alt="Heritage Fabric" className="rounded-xl shadow-lg w-full object-cover" />
                </div>
                {/* Text Content */}
                <div className="flex-1 w-full">
                  <div className="uppercase tracking-widest text-yellow-700 font-semibold text-sm mb-2">Our Heritage</div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">A Legacy of <span className="italic font-serif">Timeless Craft</span></h2>
                  <p className="text-lg text-gray-500 mb-6">For over five decades, Sukalp has been synonymous with exceptional quality in textiles and lifestyle products. Our commitment to craftsmanship, innovation, and sustainability has made us a trusted name in luxury home furnishings across the globe.</p>
                  <p className="text-lg text-gray-500 mb-10">Every thread we weave, every fabric we create, carries the promise of unparalleled elegance. From the finest Egyptian cotton to the most luxurious silks, we source only the best materials for discerning customers who appreciate the art of fine living.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">50+</div>
                      <div className="uppercase text-xs tracking-widest text-gray-500">Years of Heritage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">200+</div>
                      <div className="uppercase text-xs tracking-widest text-gray-500">Premium Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">30+</div>
                      <div className="uppercase text-xs tracking-widest text-gray-500">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">100%</div>
                      <div className="uppercase text-xs tracking-widest text-gray-500">Quality Assured</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
                  {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div>
            <div className="uppercase tracking-widest text-yellow-700 font-semibold text-sm mb-2">Get in Touch</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">We'd Love to <span className="italic font-serif">Hear from You</span></h2>
            <p className="text-lg text-gray-500 mb-10">Whether you have a question about our products, need styling advice, or want to explore a partnership — our team is here to help.</p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#faf8f5] p-3 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="h-6 w-6 text-yellow-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Visit Us</div>
                  <div className="text-gray-500">42 Mahal Road, Central District<br />Mumbai, Maharashtra 400001</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#faf8f5] p-3 rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="h-6 w-6 text-yellow-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-500">+91 22 4567 8900</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#faf8f5] p-3 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="h-6 w-6 text-yellow-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-500">hello@sukalplifestyle.com</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Full Name</label>
                <input type="text" className="w-full bg-[#f5f6fa] rounded px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#f5f6fa] rounded px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Subject</label>
              <input type="text" className="w-full bg-[#f5f6fa] rounded px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Message</label>
              <textarea className="w-full bg-[#f5f6fa] rounded px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 min-h-[120px]" placeholder="Tell us what you're looking for…"></textarea>
            </div>
            <button type="submit" className="mt-4 flex items-center gap-2 px-8 py-3 bg-[#101c36] text-white font-semibold rounded shadow hover:bg-yellow-700 transition uppercase tracking-widest">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
