import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlassCard from '../components/GlassCard';
import FloatingInput from '../components/FloatingInput';

const Networking = () => {
  const [message, setMessage] = useState('');
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      // Mock or fetch from backend
      setOpportunities([
        { title: 'Looking for Vocalist', author: 'ProdByZ', tags: ['R&B', 'Collaboration'], budget: '$200' },
        { title: 'Custom Beat Inquiry', author: 'LyricistX', tags: ['Hip Hop', 'Custom'], budget: 'Flexible' },
        { title: 'Game Soundtrack Collab', author: 'DevTeamA', tags: ['Gaming', 'Scoring'], budget: '$1,500' },
      ]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleApply = (title) => {
    alert(`Application for "${title}" transmitted. Creator has been notified.`);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    alert('Pulse transmitted to the network nerve.');
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 flex flex-col lg:flex-row gap-12">
      {/* Community Feed / Opportunity Board */}
      <div className="flex-1 space-y-10">
        <div>
          <h1 className="text-5xl font-black mb-4 tracking-tight text-white uppercase">
            NETWORKING <span className="text-gradient-gold">HUB</span>
          </h1>
          <p className="text-brand-gray text-lg font-medium">Collaborate, chat, and find your next big project.</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
             Project <span className="text-brand-gold uppercase tracking-widest text-sm">Opportunities</span>
          </h2>
          {opportunities.map((op, i) => (
            <GlassCard key={i} className="group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-white/5 hover:border-brand-gold/20">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-white group-hover:text-brand-gold transition-colors">{op.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {op.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full text-brand-gray">
                      {tag}
                    </span>
                  ))}
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold px-3 py-1">By {op.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-white/5">
                <div className="text-right">
                  <p className="text-[10px] font-black text-brand-gray uppercase tracking-widest mb-1">Budget</p>
                  <p className="text-lg font-black text-white">{op.budget}</p>
                </div>
                <button 
                  onClick={() => handleApply(op.title)}
                  className="flex-1 sm:flex-none px-8 py-3 bg-white/5 hover:bg-brand-gold hover:text-black border border-white/10 font-black text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all"
                >
                  Apply
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Real-time Collaboration / Recent Chats */}
      <aside className="w-full lg:w-96 shrink-0 space-y-8">
        <GlassCard className="border-white/10 h-[680px] flex flex-col p-0 overflow-hidden" hover={false}>
          <div className="p-6 border-b border-white/5 bg-white/5 backdrop-blur-md">
            <h3 className="font-extrabold text-xl text-white">Direct <span className="text-brand-gold">Messages</span></h3>
          </div>
          
          <div className="flex-grow overflow-y-auto space-y-6 p-6 pr-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex-shrink-0 flex items-center justify-center font-black text-brand-gold">
                  {i === 1 ? 'P' : i === 2 ? 'L' : 'D'}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-black text-sm text-white">{i === 1 ? 'ProdByZ' : i === 2 ? 'LyricistX' : 'DevTeamA'}</span>
                    <span className="text-[10px] text-brand-gray font-bold uppercase">2h ago</span>
                  </div>
                  <p className="text-xs text-brand-gray truncate font-medium">Hey, checked your latest track. Let's work!</p>
                </div>
                {i === 1 && <div className="w-2.5 h-2.5 bg-brand-gold rounded-full self-center shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="p-6 mt-auto border-t border-white/5 bg-white/5 flex gap-3 items-end">
            <div className="flex-1">
              <FloatingInput 
                label="Transmission" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Send pulse..." 
              />
            </div>
            <button type="submit" className="w-14 h-14 bg-brand-gold rounded-xl flex items-center justify-center text-black shadow-lg shadow-brand-gold/20 hover:scale-110 active:scale-95 transition-all mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </button>
          </form>
        </GlassCard>
      </aside>
    </div>
  );
};

export default Networking;
