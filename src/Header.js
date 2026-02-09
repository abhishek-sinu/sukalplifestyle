import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
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
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md fixed top-0 left-0 z-20">
      <div className="text-2xl font-serif tracking-widest font-bold text-gray-900">SUKALP</div>
      <div className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        {items.map((item, idx) =>
          item.type === 'link' ? (
            <Link key={item.label} to={item.link} className="hover:text-yellow-700 transition">{item.label}</Link>
          ) : (
            <a key={item.label} href={item.link} className="hover:text-yellow-700 transition">{item.label}</a>
          )
        )}
      </div>
      <div className="flex gap-4 items-center text-gray-700 text-xl">
        <button className="hover:text-yellow-700"><FaSearch /></button>
        <button className="hover:text-yellow-700"><FaUser /></button>
      </div>
    </nav>
  );
}
