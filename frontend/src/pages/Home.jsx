import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-dark via-brand-black to-brand-black -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-gold via-brand-lightgold to-brand-gold">
            OWN YOUR SOUND.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            The ultimate creator-owned music ecosystem. Distribute, collaborate, and monetize without limits.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login" className="px-8 py-4 bg-brand-gold text-black rounded-full font-bold text-lg hover:bg-brand-lightgold transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              Join as Artist
            </Link>
            <Link to="/marketplace" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              Explore Music
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { title: '100% Royalties', desc: 'Keep what you earn. Transparent splits for collaborators.' },
            { title: 'Global Marketplace', desc: 'Sell beats, merch, and tickets directly to your fans.' },
            { title: 'Real in-app Networking', desc: 'Connect with producers, artists, and industry pros.' }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl bg-brand-black border border-white/5 hover:border-brand-gold/30 transition-colors group">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 rounded-full bg-brand-gold shadow-[0_0_10px_#d4af37]"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
