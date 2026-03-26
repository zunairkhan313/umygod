import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlassCard from '../components/GlassCard';
import FloatingInput from '../components/FloatingInput';
import { useAuth } from '../context/AuthContext';
import Skeleton from '../components/Skeleton';
import { usePlayer } from '../context/PlayerContext';
import { 
  RiDashboardLine, 
  RiMusic2Line, 
  RiCoinLine, 
  RiSettings4Line, 
  RiUploadCloud2Line,
  RiEditLine,
  RiPulseLine,
  RiWallet3Line,
  RiUserFollowLine,
  RiFileList3Line,
  RiPlayCircleLine
} from 'react-icons/ri';

const Dashboard = () => {
  const { user, token } = useAuth();
  const { playTrack } = usePlayer();
  const [activeTab, setActiveTab] = useState('overview');
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadForm, setUploadForm] = useState({ title: '', genre: '', bpm: '', key: '', isrc: '' });

  useEffect(() => {
    if (token) fetchSongs();
  }, [token]);

  const fetchSongs = async () => {
    try {
      const res = await axios.get('/api/music');
      setSongs(res.data);
    } catch (err) {
      console.error('Error fetching songs', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/music/upload', uploadForm, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShowUpload(false);
      fetchSongs();
      setUploadForm({ title: '', genre: '', bpm: '', key: '', isrc: '' });
    } catch (err) {
      alert('Upload failed. Check your data.');
    }
  };

  const stats = [
    { label: 'Total Streams', value: '1.2M', increase: '+12%', color: 'from-blue-500/10 to-brand-gold/5', icon: RiPulseLine },
    { label: 'Revenue', value: `$${user?.balance || '0.00'}`, increase: '+8%', color: 'from-green-500/10 to-brand-gold/5', icon: RiWallet3Line },
    { label: 'Followers', value: '45.2K', increase: '+24%', color: 'from-purple-500/10 to-brand-gold/5', icon: RiUserFollowLine },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {loading ? (
                [...Array(3)].map((_, i) => (
                  <GlassCard key={i} className="p-8 border-white/5 space-y-4">
                    <Skeleton className="h-4 w-1/3 rounded-lg" />
                    <div className="flex justify-between items-end">
                      <Skeleton className="h-10 w-1/2 rounded-lg" />
                      <Skeleton className="h-8 w-16 rounded-full" />
                    </div>
                  </GlassCard>
                ))
              ) : (
                stats.map((stat, i) => (
                  <GlassCard key={i} className={`relative overflow-hidden group bg-gradient-to-br ${stat.color} border-white/5`}>
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-brand-gray text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                      <stat.icon className="text-brand-gold text-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex items-end justify-between relative z-10">
                      <h3 className="text-4xl font-black text-white">{stat.value}</h3>
                      <span className="text-brand-gold text-sm font-bold mb-1 bg-brand-gold/10 px-3 py-1.5 rounded-full border border-brand-gold/20">
                        {stat.increase}
                      </span>
                    </div>
                  </GlassCard>
                ))
              )}
            </div>
            
            <GlassCard className="border-white/5 overflow-hidden mt-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <RiFileList3Line className="text-brand-gold" />
                  <span>Recent <span className="text-brand-gold font-mono">Activity</span></span>
                </h2>
              </div>
              <p className="text-brand-gray italic">No recent activity detected.</p>
            </GlassCard>
          </>
        );
      case 'music':
        return (
          <GlassCard className="border-white/5 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <RiMusic2Line className="text-brand-gold" />
                <span>Catalog & <span className="text-brand-gold font-mono">ISRC</span> Tracking</span>
              </h2>
              <button 
                onClick={() => setShowUpload(true)}
                className="flex items-center gap-2 px-6 py-3 glass rounded-xl text-sm font-bold text-brand-gold hover:bg-brand-gold/15 transition-all border-brand-gold/30"
              >
                <RiUploadCloud2Line className="text-lg" />
                <span>Upload Music</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="text-brand-gray uppercase text-[10px] tracking-[0.2em] font-black border-b border-white/5">
                    <th className="px-4 pb-6">Track</th>
                    <th className="px-4 pb-6">ISRC ID</th>
                    <th className="px-4 pb-6">Genre</th>
                    <th className="px-4 pb-6">Status</th>
                    <th className="px-4 pb-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    [...Array(5)].map((_, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="px-4 py-6"><Skeleton className="h-8 w-40 rounded-lg" /></td>
                        <td className="px-4 py-6"><Skeleton className="h-6 w-32 rounded-lg" /></td>
                        <td className="px-4 py-6"><Skeleton className="h-6 w-24 rounded-lg" /></td>
                        <td className="px-4 py-6"><Skeleton className="h-6 w-20 rounded-full" /></td>
                        <td className="px-4 py-6 text-right"><Skeleton className="h-8 w-16 rounded-lg ml-auto" /></td>
                      </tr>
                    ))
                  ) : (
                    songs.map(track => (
                      <tr key={track.id} className="group hover:bg-white/[0.03] transition-colors border-b border-white/5 last:border-0 border-collapse">
                        <td className="px-4 py-6">
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => playTrack(track)}
                              className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all transform active:scale-95 shadow-lg shadow-brand-gold/5"
                            >
                               <RiPlayCircleLine className="text-2xl" />
                            </button>
                            <span className="font-bold text-white text-lg">{track.title}</span>
                          </div>
                        </td>
                        <td className="px-4 py-6 font-mono text-brand-gold text-sm opacity-80">{track.isrc || 'N/A'}</td>
                        <td className="px-4 py-6 font-semibold text-white/80">{track.genre || 'Various'}</td>
                        <td className="px-4 py-6">
                          <span className="text-[9px] px-3 py-1 rounded-full border uppercase font-black tracking-widest bg-green-500/10 text-green-400 border-green-400/20">
                            Published
                          </span>
                        </td>
                        <td className="px-4 py-6 text-right">
                          <button className="flex items-center gap-2 text-brand-gray hover:text-white transition-colors font-bold text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg ml-auto group">
                            <RiEditLine className="text-base group-hover:text-brand-gold transition-colors" />
                            <span>Edit</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                  {songs.length === 0 && !loading && (
                    <tr>
                      <td colSpan="5" className="px-4 py-20 text-center text-brand-gray font-bold italic tracking-widest uppercase text-xs opacity-50">No tracks initialized in current session.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </GlassCard>
        );
      case 'royalties':
        return <GlassCard className="p-20 text-center"><h2 className="text-2xl font-black text-brand-gray uppercase tracking-widest">Royalty Breakdown Coming Soon</h2></GlassCard>;
      case 'settings':
        return <GlassCard className="p-20 text-center"><h2 className="text-2xl font-black text-brand-gray uppercase tracking-widest">Account Settings Control Panel</h2></GlassCard>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 flex gap-10 flex-col lg:flex-row relative">
      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <GlassCard className="w-full max-w-lg p-10 border-brand-gold/20" hover={false}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black text-white">Upload <span className="text-brand-gold">Music</span></h2>
              <button onClick={() => setShowUpload(false)} className="text-brand-gray hover:text-white transition-colors font-black">X</button>
            </div>
            <form onSubmit={handleUpload} className="space-y-1">
              <FloatingInput label="Track Title" value={uploadForm.title} onChange={(e) => setUploadForm({...uploadForm, title: e.target.value})} required />
              <div className="grid grid-cols-2 gap-4">
                <FloatingInput label="Genre" value={uploadForm.genre} onChange={(e) => setUploadForm({...uploadForm, genre: e.target.value})} required />
                <FloatingInput label="BPM" value={uploadForm.bpm} onChange={(e) => setUploadForm({...uploadForm, bpm: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FloatingInput label="Key" value={uploadForm.key} onChange={(e) => setUploadForm({...uploadForm, key: e.target.value})} />
                <FloatingInput label="ISRC ID" value={uploadForm.isrc} onChange={(e) => setUploadForm({...uploadForm, isrc: e.target.value})} />
              </div>
              <button type="submit" className="w-full py-5 bg-brand-gold text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-lightgold shadow-xl shadow-brand-gold/20 transition-all mt-4">
                Initialize Release
              </button>
            </form>
          </GlassCard>
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-full lg:w-72 shrink-0">
        <GlassCard className="sticky top-32 border-white/10" hover={false}>
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-lightgold rounded-xl flex items-center justify-center text-black font-extrabold text-2xl shadow-[0_0_20px_rgba(212,175,55,0.3)] uppercase">
              {user?.username?.[0] || 'U'}
            </div>
            <div>
              <h3 className="font-bold text-xl text-white truncate max-w-[140px]">{user?.username || 'Artist'}</h3>
              <p className="text-xs text-brand-gold font-black uppercase tracking-tighter">{user?.role || 'Creator'}</p>
            </div>
          </div>
          
          <nav className="space-y-3">
            {[
              { id: 'overview', label: 'Overview', icon: RiDashboardLine },
              { id: 'music', label: 'Music Catalog', icon: RiMusic2Line },
              { id: 'royalties', label: 'Royalties', icon: RiCoinLine },
              { id: 'settings', label: 'Settings', icon: RiSettings4Line }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-5 py-3.5 rounded-xl transition-all capitalize font-medium flex items-center gap-3 ${
                  activeTab === tab.id
                    ? 'bg-brand-gold text-black shadow-lg shadow-brand-gold/20' 
                    : 'text-brand-gray hover:bg-white/5 hover:text-white group'
                }`}
              >
                <tab.icon className={`text-xl ${activeTab === tab.id ? 'text-black' : 'text-brand-gold group-hover:text-white transition-colors'}`} />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </GlassCard>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full space-y-10">
        <div>
          <h1 className="text-5xl font-black mb-3 tracking-tight text-white">
            Creator <span className="text-gradient-gold lowercase">Dashboard</span>
          </h1>
          <p className="text-brand-gray text-lg">Managing the legacy of <span className="text-white font-bold">{user?.username}</span>.</p>
        </div>
        
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
