// Hero categories for Multi-Card Hero Grid
import { useEffect, useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Simple slideshow component for hero section
function HeroSlideshow() {
  const slides = [
    {
      image: '/home screen.png',
      title: 'Crafted for Elegance',
      subtitle: 'Premium Textile & Lifestyle',
      description: 'Discover our curated collection of premium fabrics, bedding, and home furnishings — designed with timeless sophistication.',
      cta1: { label: 'EXPLORE COLLECTIONS', link: '/gallery' },
      cta2: { label: 'OUR STORY', link: '/about' }
    },
    {
      image: '/White Bed Sheet.png',
      title: 'Sleep in Luxury',
      subtitle: 'Premium Bed Linen',
      description: 'Experience the comfort of our premium bedsheets and duvets, crafted for restful nights.',
      cta1: { label: 'Shop Bed Linen', link: '/gallery?category=Bed%20Linen' },
      cta2: { label: 'Learn More', link: '/about' }
    },
    {
      image: '/gallery-3-bath.jpg',
      title: 'Spa at Home',
      subtitle: 'Bath Linen Collection',
      description: 'Indulge in plush towels and bath linens for a spa-like experience every day.',
      cta1: { label: 'Shop Bath Linen', link: '/gallery?category=Bath%20Linen' },
      cta2: { label: 'Our Story', link: '/about' }
    },
    {
      image: '/category-furnishing-DhuIuprn.jpg',
      title: 'Furnish with Style',
      subtitle: 'Home Furnishing',
      description: 'Discover runners, covers, and mats to elevate your living spaces.',
      cta1: { label: 'Shop Home Furnishing', link: '/gallery?category=Home%20Furnishing' },
      cta2: { label: 'Our Story', link: '/about' }
    },
    {
      image: '/HP-White Bedsheet.png',
      title: 'Trusted by Hospitals',
      subtitle: 'Hospital Products',
      description: 'Premium white linens, uniforms, and essentials for healthcare and hospitality.',
      cta1: { label: 'Shop Hospital Products', link: '/gallery?category=Hospital%20Products' },
      cta2: { label: 'Our Story', link: '/about' }
    }
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCurrent((current + 1) % slides.length), 6000);
    return () => clearTimeout(timer);
  }, [current]);
  return (
    <section className="relative flex items-center justify-start min-h-[100vh] pt-32 pb-24 px-8 bg-gradient-to-br from-[#0a183d]/80 to-[#fff]/60 overflow-hidden">
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80 transition-all duration-700"
      />
      <div className="relative z-10 max-w-2xl text-left animate-fadeIn">
        <div className="uppercase tracking-widest text-yellow-600 font-semibold text-sm mb-2">{slides[current].subtitle}</div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-lg leading-tight">
          {slides[current].title.includes('Elegance') ? (
            <>
              Crafted for <span className="italic text-yellow-300">Elegance</span>
            </>
          ) : slides[current].title}
        </h1>
        <p className="mt-6 text-lg text-white/90 font-medium max-w-lg bg-black/60 rounded px-4 py-2">
          {slides[current].description}
        </p>
        <div className="mt-8 flex gap-4">
          <Link to={slides[current].cta1.link} className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded shadow hover:bg-yellow-600 transition">{slides[current].cta1.label}</Link>
          <Link to={slides[current].cta2.link} className="px-8 py-3 border border-white text-white font-semibold rounded shadow hover:bg-white hover:text-yellow-700 transition">{slides[current].cta2.label}</Link>
        </div>
        {/* Slide indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-yellow-500 border-yellow-500' : 'bg-white/40 border-white/60'} transition-all`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Hero categories for Multi-Card Hero Grid
const heroCategories = [
  {
    name: "Bath Linen",
    image: "/bath.png",
    description: "Luxurious towels and linens for a spa-like experience.",
    link: "/gallery?category=Bath%20Linen"
  },
  {
    name: "Bed Linen",
    image: "/White Bed Sheet.png",
    description: "Premium bedsheets and comforters for restful nights.",
    link: "/gallery?category=Bed%20Linen"
  },
  {
    name: "Hospital Products",
    image: "/HP-White Bedsheet.png",
    description: "Quality linens and uniforms for healthcare and hospitality.",
    link: "/gallery?category=Hospital%20Products"
  },
  {
    name: "Hospitality",
    image: "/Duvet & Pillow Set.png",
    description: "White essentials for hotels and hospitals.",
    link: "/gallery?category=Hospitality"
  },
  {
    name: "Home Furnishing",
    image: "/bed-runner.png",
    description: "Stylish runners, covers, and mats for your home.",
    link: "/gallery?category=Home%20Furnishing"
  }
];

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg("");
  };

  return (
    <>
      <div className="min-h-screen bg-white">
      <Header />

{/* Hero Section - Slideshow */}
<HeroSlideshow />

      {/* Multi-Card Hero Grid for Categories */}
      <section id="collections" className="bg-[#faf8f5] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="uppercase tracking-widest text-yellow-700 font-semibold text-sm mb-2">Our Collections</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">Shop by Category</h2>
            <div className="mx-auto w-24 h-1 bg-yellow-500 rounded mt-2 mb-0"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroCategories.map(cat => (
              <div key={cat.name} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6">
                <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{cat.description}</p>
                <a href={cat.link} className="text-[#C2410C] font-semibold hover:underline">View Collection</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Featured Products</h2>
            <Link to="/gallery" className="text-gray-500 text-base font-semibold tracking-widest border-b border-gray-300 hover:text-yellow-700 hover:border-yellow-700 transition">VIEW ALL PRODUCTS</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <span className="absolute top-6 left-6 bg-yellow-600 text-white text-xs font-bold px-4 py-1 rounded uppercase tracking-widest z-20">Bestseller</span>
              <img src="/product-1.jpg" alt="White Sheets" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => openModal('/product-1.jpg')} />
            </div>
            {/* Product 2 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <span className="absolute top-6 left-6 bg-yellow-600 text-white text-xs font-bold px-4 py-1 rounded uppercase tracking-widest z-20">New Arrival</span>
              <img src="/White Bed Sheet.png" alt="Blue Pillows" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => openModal('/White Bed Sheet.png')} />
            </div>
            {/* Product 3 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <img src="/product-3.jpg" alt="White Robe" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => openModal('/product-3.jpg')} />
            </div>
            {/* Product 4 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <span className="absolute top-6 left-6 bg-yellow-600 text-white text-xs font-bold px-4 py-1 rounded uppercase tracking-widest z-20">Trending</span>
              <img src="/Gym.png" alt="Blue Throw" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => openModal('/Gym.png')} />
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
                      <div className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">12+</div>
                      <div className="uppercase text-xs tracking-widest text-gray-500">Years of Heritage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">200+</div>
                      <div className="uppercase text-xs tracking-widest text-gray-500">Premium Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">100+</div>
                      <div className="uppercase text-xs tracking-widest text-gray-500">Customer Serving</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">100%</div>
                      <div className="uppercase text-xs tracking-widest text-gray-500">Quality Assured</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
                  {/* Contact Section with Google Maps */}
      <section id="contact" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="uppercase tracking-widest text-yellow-700 font-semibold text-sm mb-2">Visit Us</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Find Us on the <span className="italic font-serif">Map</span></h2>
            <p className="text-lg text-gray-500 mb-4">A/306, Rajclassic CHSL, Opp Shalom hospital, Indralok Phase - 6, Bhayander East, Thane – 401105, Mumbai, Maharashtra</p>
          </div>
          
          {/* Google Map Iframe */}
          <div className="w-full rounded-xl shadow-lg overflow-hidden">
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.8477883477883!2d72.8699173!3d19.3011111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b03c99ba0ff3%3A0x9dca675796f8bf26!2sA%2F306%20Rajclassic%20CHSL%2C%20Indralok%20Phase%206%2C%20Bhayander%20East!5e0!3m2!1sen!2sin!4v1707459600000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sukalp Office Location"
            ></iframe>
          </div>

          {/* Contact Info Below Map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-lg p-4 inline-flex mb-4">
                <FaMapMarkerAlt className="h-6 w-6 text-yellow-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-500 text-sm">A/306, Rajclassic CHSL, Opp Shalom hospital,<br />Indralok Phase - 6, Bhayander East,<br />Thane – 401105, Mumbai, Maharashtra</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-lg p-4 inline-flex mb-4">
                <FaPhoneAlt className="h-6 w-6 text-yellow-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-500">9307020467</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-lg p-4 inline-flex mb-4">
                <FaEnvelope className="h-6 w-6 text-yellow-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500">sukalplifestyles@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
      {/* Modal for zoomed image */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-3xl text-gray-700 hover:text-yellow-700 focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img src={modalImg} alt="Full Product" className="w-full h-auto max-h-[70vh] rounded object-contain mb-4" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
