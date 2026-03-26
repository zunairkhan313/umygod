import React, { useRef, useEffect } from 'react';
import GlassCard from './GlassCard';
import { 
  RiArrowLeftSLine, 
  RiArrowRightSLine, 
  RiDoubleQuotesL, 
  RiVerifiedBadgeLine 
} from 'react-icons/ri';

const stories = [
  { 
    name: 'Vortex7', 
    role: 'Platinum Producer', 
    quote: 'The transparency in royalty splits is unmatched. I finally see every penny of my publishing and mechanicals in real-time.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop',
    stats: '+$85K Revenue'
  },
  { 
    name: 'Luna Ray', 
    role: 'Independent Artist', 
    quote: 'UMyGod helped me fund my world tour through direct fan memberships without a labels cut. The community power is real.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&auto=format&fit=crop',
    stats: '12K Members'
  },
  { 
    name: 'Ether Beats', 
    role: 'Sync Specialist', 
    quote: 'Licensed my catalog to three major game studios directly through the marketplace. No middleman, just pure growth.',
    image: 'https://images.unsplash.com/photo-1588661751167-7ea4c01f6522?q=80&w=400&auto=format&fit=crop',
    stats: '42 Sync Placements'
  },
  { 
    name: 'Jade Storm', 
    role: 'Sound Designer', 
    quote: 'The metadata integrity on this platform ensures my library is always correctly attributed and paid. Simply the best.',
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&auto=format&fit=crop',
    stats: 'Top 1% Seller'
  }
];

const SuccessCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let scrollTo;
      
      if (direction === 'left') {
        scrollTo = scrollLeft - clientWidth;
        if (scrollTo < 0) scrollTo = scrollWidth - clientWidth; // Wrap to end
      } else {
        scrollTo = scrollLeft + clientWidth;
        if (scrollTo >= scrollWidth) scrollTo = 0; // Wrap to start
      }
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 italic uppercase tracking-tighter leading-none flex flex-col">
            <span>Success</span>
            <span className="text-gradient-gold">Stories</span>
          </h2>
          <p className="text-brand-gray text-xl font-medium">Hear from the creators who reached sovereignty through the UMyGod protocol.</p>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-white hover:border-brand-gold/50 hover:text-brand-gold transition-all active:scale-90"
          >
            <RiArrowLeftSLine className="text-3xl" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-white hover:border-brand-gold/50 hover:text-brand-gold transition-all active:scale-90"
          >
            <RiArrowRightSLine className="text-3xl" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-12"
      >
        {stories.map((story, i) => (
          <div key={i} className="min-w-[350px] md:min-w-[450px] snap-center">
            <GlassCard className="p-12 border-white/5 flex flex-col items-center text-center relative group h-full hover:border-brand-gold/20 transition-all duration-500" hover={true}>
              <RiDoubleQuotesL className="text-6xl text-brand-gold/10 absolute top-10 left-10" />
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={story.image} className="w-32 h-32 rounded-3xl border-2 border-brand-gold/30 object-cover group-hover:scale-105 transition-transform relative z-10" alt={story.name} />
              </div>
              <p className="text-brand-gray text-lg font-medium italic mb-10 leading-relaxed z-10">"{story.quote}"</p>
              <div className="mt-auto">
                <h4 className="font-black text-white uppercase tracking-widest text-base">{story.name}</h4>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <RiVerifiedBadgeLine className="text-brand-gold" />
                  <p className="text-brand-gold text-xs font-black uppercase tracking-tighter">{story.role}</p>
                </div>
                <div className="mt-6 px-4 py-2 glass border border-brand-gold/20 rounded-xl text-brand-gold text-[10px] font-black uppercase tracking-[0.2em]">
                  {story.stats}
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessCarousel;
