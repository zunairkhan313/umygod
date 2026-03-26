import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  RiHome4Line, 
  RiStore2Line, 
  RiDashboardLine, 
  RiInformationLine, 
  RiQuestionLine,
  RiLogoutBoxRLine,
  RiLoginBoxLine
} from 'react-icons/ri';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-20 glass border border-white/10 rounded-2xl flex items-center justify-between px-8 z-[100] backdrop-blur-xl">
      <Link to="/" className="text-2xl font-black tracking-tighter text-white hover:text-brand-gold transition-colors flex items-center gap-2">
        <span className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center text-black text-xl">U</span>
        <span>UMY<span className="text-brand-gold">GOD</span></span>
      </Link>
      
      <div className="hidden lg:flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-gray hover:text-white transition-colors group">
          <RiHome4Line className="text-lg group-hover:text-brand-gold transition-colors" />
          <span>Home</span>
        </Link>
        <Link to="/marketplace" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-gray hover:text-white transition-colors group">
          <RiStore2Line className="text-lg group-hover:text-brand-gold transition-colors" />
          <span>Marketplace</span>
        </Link>
        {user && (
          <Link to="/dashboard" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-gold hover:text-white transition-colors group">
            <RiDashboardLine className="text-lg group-hover:text-white transition-colors" />
            <span>Dashboard</span>
          </Link>
        )}
        <Link to="/about" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-gray hover:text-white transition-colors group">
          <RiInformationLine className="text-lg group-hover:text-brand-gold transition-colors" />
          <span>About</span>
        </Link>
        <Link to="/contact" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-gray hover:text-white transition-colors group">
          <RiQuestionLine className="text-lg group-hover:text-brand-gold transition-colors" />
          <span>Contact</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <button onClick={logout} className="flex items-center gap-2 px-6 py-2.5 glass border border-white/5 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all group">
            <RiLogoutBoxRLine className="text-lg group-hover:text-brand-gold transition-colors" />
            <span>Sign Out</span>
          </button>
        ) : (
          <Link to="/login" className="flex items-center gap-2 px-8 py-3 bg-brand-gold text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-lightgold shadow-lg shadow-brand-gold/20 transition-all group">
            <RiLoginBoxLine className="text-lg" />
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
