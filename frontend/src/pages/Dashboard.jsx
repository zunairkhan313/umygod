import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Streams', value: '1.2M', increase: '+12%' },
    { label: 'Revenue', value: '$8,450', increase: '+8%' },
    { label: 'Followers', value: '45.2K', increase: '+24%' },
  ];

  const recentTracks = [
    { id: 1, title: 'Midnight City (Remix)', plays: '405K', royalties: '$1,200', status: 'Published' },
    { id: 2, title: 'Golden Hour', plays: '250K', royalties: '$800', status: 'Published' },
    { id: 3, title: 'Neon Lights', plays: '120K', royalties: '$450', status: 'Processing' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8 flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="bg-brand-black border border-white/5 rounded-2xl p-6 sticky top-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              A
            </div>
            <div>
              <h3 className="font-bold text-lg">ArtistName</h3>
              <span className="text-xs text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-full border border-brand-gold/20 font-medium tracking-wide">Verified Artist</span>
            </div>
          </div>
          
          <nav className="space-y-2">
            {['overview', 'music', 'royalties', 'settings'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all capitalize ${
                  activeTab === tab 
                    ? 'bg-brand-gold text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.2)]' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <h1 className="text-3xl font-bold mb-8 tracking-tight">Dashboard Overview</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-brand-black border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-brand-gold/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-[40px] group-hover:bg-brand-gold/10 transition-colors"></div>
              <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider font-semibold">{stat.label}</p>
              <div className="flex items-end justify-between relative z-10">
                <h3 className="text-4xl font-black">{stat.value}</h3>
                <span className="text-green-400 text-sm font-bold mb-1 bg-green-900/30 px-2 py-1 rounded-md">{stat.increase}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Tracks */}
        <div className="bg-brand-black border border-white/5 rounded-2xl p-6 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Tracks</h2>
            <button className="text-sm font-semibold text-brand-gold hover:text-brand-lightgold transition-colors">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="text-gray-500 border-b border-white/10 uppercase text-xs tracking-wider">
                  <th className="pb-3 font-semibold">Track</th>
                  <th className="pb-3 font-semibold">Plays</th>
                  <th className="pb-3 font-semibold">Earned</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentTracks.map(track => (
                  <tr key={track.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 font-bold text-white pr-4">{track.title}</td>
                    <td className="py-4 font-medium text-gray-300 pr-4">{track.plays}</td>
                    <td className="py-4 font-bold text-brand-gold pr-4">{track.royalties}</td>
                    <td className="py-4 pr-4">
                      <span className={`text-xs px-3 py-1.5 rounded-full border font-bold ${
                        track.status === 'Published' 
                          ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                          : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                      }`}>
                        {track.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-gray-400 hover:text-white transition-colors font-medium">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
