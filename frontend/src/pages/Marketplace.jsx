import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlassCard from '../components/GlassCard';
import Skeleton from '../components/Skeleton';
import { usePlayer } from '../context/PlayerContext';
import { 
  RiStore3Line, 
  RiSearchLine, 
  RiShoppingBag3Line,
  RiMusic2Line,
  RiTShirtLine,
  RiShieldStarLine,
  RiTicket2Line,
  RiLayoutGridLine,
  RiArrowRightLine,
  RiPlayCircleLine
} from 'react-icons/ri';

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { playTrack } = usePlayer();

  const categories = [
    { name: 'All', icon: RiLayoutGridLine },
    { name: 'Beats', icon: RiMusic2Line },
    { name: 'Merch', icon: RiTShirtLine },
    { name: 'Licenses', icon: RiShieldStarLine },
    { name: 'Tickets', icon: RiTicket2Line }
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/marketplace');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBuy = async (productId) => {
    try {
      alert('Transaction Initialized. Securely connecting to the minting protocol...');
    } catch (err) {
      alert('Transaction failed.');
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.type.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 space-y-16">
      {/* Marketplace Header & Featured */}
      <section className="relative rounded-[40px] overflow-hidden min-h-[450px] flex items-center px-12 border border-white/5 group">
        <div className="absolute inset-0 -z-10 bg-brand-black">
          <img 
            src="/appDataDir/brain/bb7786ab-772f-4f6d-8635-470b0c371140/umygod_marketplace_placeholder_1774562473835.png" 
            className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
            alt="Marketplace Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/20 to-transparent"></div>
        </div>
        
        <div className="max-w-2xl space-y-6">
          <GlassCard className="inline-block px-4 py-2 border-brand-gold/30 rounded-full" hover={false}>
            <div className="flex items-center gap-2">
              <RiStore3Line className="text-brand-gold" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">The Asset Exchange</span>
            </div>
          </GlassCard>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-tight uppercase">THE GLOBAL <br /><span className="text-gradient-gold">CREATOR CORE</span></h1>
          <p className="text-lg text-brand-gray font-medium max-w-lg leading-relaxed">Acquire exclusive licenses, custom beats, and limited merchandise directly from the world's most innovative producers.</p>
        </div>
      </section>

      {/* Discovery Tool */}
      <GlassCard className="p-8 border-white/10" hover={false}>
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
          <div className="flex gap-4 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-3 px-8 py-3 rounded-2xl whitespace-nowrap text-xs font-black uppercase tracking-widest transition-all border ${
                  activeCategory === cat.name 
                    ? 'bg-brand-gold text-black border-brand-gold shadow-lg shadow-brand-gold/20 scale-105' 
                    : 'text-brand-gray border-white/5 hover:border-white/20 hover:text-white group'
                }`}
              >
                <cat.icon className={`text-lg ${activeCategory === cat.name ? 'text-black' : 'text-brand-gold/50 group-hover:text-brand-gold transition-colors'}`} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-96 group">
             <input 
               type="text" 
               placeholder="Search registry..." 
               className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-12 text-white text-sm font-medium focus:outline-none focus:border-brand-gold/50 transition-all group-hover:bg-white/[0.08]"
             />
             <div className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-gold transition-colors">
                <RiSearchLine className="text-xl" />
             </div>
          </div>
        </div>
      </GlassCard>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading ? (
          [...Array(8)].map((_, i) => (
            <div key={i} className="p-4 glass border border-white/5 rounded-[32px] space-y-4">
              <Skeleton className="aspect-square rounded-2xl" />
              <div className="space-y-2 p-2">
                <Skeleton className="h-6 w-3/4 rounded-lg" />
                <Skeleton className="h-4 w-1/2 rounded-lg" />
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <Skeleton className="h-8 w-20 rounded-lg" />
                <Skeleton className="h-10 w-24 rounded-lg" />
              </div>
            </div>
          ))
        ) : (
          filteredProducts.map(product => (
            <GlassCard key={product.id} className="p-4 border-white/5 group hover:border-brand-gold/30 transition-all flex flex-col h-full" hover={true}>
              <div className="aspect-square glass rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-gold/5 flex items-center justify-center font-black text-7xl text-brand-gold/10 uppercase italic">{product.name[0]}</div>
                <img src={product.imageUrl || 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=500&auto=format&fit=crop'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt={product.name} />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button 
                     onClick={() => playTrack({ title: product.name, artist: product.User?.username || 'Verified Creator' })}
                     className="w-14 h-14 bg-brand-gold text-black rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-2xl shadow-brand-gold/40"
                   >
                     <RiPlayCircleLine className="text-3xl" />
                   </button>
                </div>

                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                   <RiShieldStarLine className="text-brand-gold text-[10px]" />
                   <span className="text-[9px] font-black text-white italic tracking-tighter uppercase">{product.type}</span>
                </div>
              </div>
              
              <div className="space-y-4 flex-grow flex flex-col p-2">
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-brand-gold transition-colors line-clamp-1 italic uppercase tracking-tighter">{product.name}</h3>
                  <p className="text-brand-gray text-[10px] font-black uppercase tracking-[0.2em] mt-1 opacity-60">Creator: {product.User?.username || 'Verified'}</p>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-auto gap-4">
                  <span className="text-3xl font-black text-white italic tracking-tighter">${product.price}</span>
                  <button 
                    onClick={() => handleBuy(product.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white hover:bg-brand-gold hover:text-black rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all transform active:scale-95 group/btn"
                  >
                    <RiShoppingBag3Line className="text-base group-hover/btn:scale-110 transition-transform" />
                    <span>Acquire</span>
                  </button>
                </div>
              </div>
            </GlassCard>
          ))
        )}
        {!loading && filteredProducts.length === 0 && (
           <div className="col-span-full py-32 text-center glass border border-white/5 rounded-[40px]">
              <RiStore3Line className="text-6xl text-brand-gold/20 mx-auto mb-4 animate-pulse" />
              <p className="text-brand-gray font-black tracking-[0.4em] uppercase opacity-20 text-xs italic">Registry Empty for this Selection</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
