import React from 'react';

const Marketplace = () => {
  const products = [
    { id: 1, name: 'Exclusive Synth Beat', type: 'Beat', price: '$299', seller: 'ProdByZ', image: 'bg-indigo-900/50' },
    { id: 2, name: 'Summer Tour Ticket (VIP)', type: 'Ticket', price: '$150', seller: 'ArtistName', image: 'bg-pink-900/50' },
    { id: 3, name: 'Limited Gold Vinyl', type: 'Merch', price: '$45', seller: 'BandXYZ', image: 'bg-brand-gold/20' },
    { id: 4, name: 'Commercial Use License', type: 'License', price: '$500', seller: 'SoundMaster', image: 'bg-blue-900/50' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-brand-gold">THE MARKETPLACE</h1>
          <p className="text-gray-400 text-lg max-w-2xl font-light">
            Discover exclusive beats, limited edition merch, event tickets, and licensing opportunities directly from creators.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <select className="bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold font-medium w-full sm:w-auto">
            <option>All Categories</option>
            <option>Beats</option>
            <option>Merch</option>
            <option>Tickets</option>
            <option>Licenses</option>
          </select>
          <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 text-white font-bold rounded-lg transition-colors w-full sm:w-auto">
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-brand-black border border-white/5 rounded-2xl overflow-hidden hover:border-brand-gold/40 hover:-translate-y-2 transition-all group shadow-lg shadow-black/50">
             {/* Mock Image Area */}
            <div className={`h-48 ${product.image} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80 z-0"></div>
              <span className="relative z-10 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-black uppercase tracking-wider shadow-xl">
                {product.type}
              </span>
            </div>
            
            <div className="p-5 border-t border-white/5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-tight group-hover:text-brand-gold transition-colors">{product.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6 font-medium">by <span className="text-gray-300">{product.seller}</span></p>
              
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-2xl font-black text-white group-hover:text-brand-gold transition-colors">{product.price}</span>
                <button className="px-5 py-2.5 bg-brand-gold/10 text-brand-gold hover:bg-brand-gold hover:text-black font-bold rounded-xl transition-all shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
