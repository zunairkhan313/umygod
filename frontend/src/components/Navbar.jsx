import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/10 h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-brand-gold">
          U<span className="text-white">My</span>God
        </Link>
        <div className="hidden md:flex space-x-8 items-center cursor-pointer">
          <Link to="/marketplace" className="text-gray-300 hover:text-brand-gold transition-colors font-medium">Marketplace</Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-brand-gold transition-colors font-medium">Dashboard</Link>
          <Link to="/login" className="px-5 py-2 bg-brand-gold text-black font-semibold rounded-full hover:bg-brand-lightgold transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
