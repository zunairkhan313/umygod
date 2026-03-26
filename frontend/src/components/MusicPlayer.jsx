import React from 'react';
import GlassCard from './GlassCard';
import { usePlayer } from '../context/PlayerContext';
import { 
  RiPlayFill, 
  RiPauseFill, 
  RiSkipBackFill, 
  RiSkipForwardFill, 
  RiVolumeUpFill,
  RiMusic2Fill,
  RiHeartFill
} from 'react-icons/ri';

const MusicPlayer = () => {
  const { currentTrack, isPlaying, togglePlay } = usePlayer();

  // The player only appears if a track has been selected/initialized
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl px-4 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <GlassCard className="flex items-center gap-6 p-4 border-white/10 shadow-2xl shadow-black/50 backdrop-blur-2xl" hover={false}>
        {/* Track Info */}
        <div className="flex items-center gap-4 w-72">
          <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-lightgold rounded-xl flex items-center justify-center text-black shadow-lg shadow-brand-gold/20 flex-shrink-0 overflow-hidden">
             {currentTrack.coverArtUrl ? (
               <img src={currentTrack.coverArtUrl} className="w-full h-full object-cover" alt="Cover" />
             ) : (
               <RiMusic2Fill className="text-2xl" />
             )}
          </div>
          <div className="min-w-0">
            <h4 className="text-base font-black text-white truncate uppercase tracking-tighter">
              {currentTrack.title}
            </h4>
            <div className="flex items-center gap-2">
              <p className="text-[10px] text-brand-gold font-black uppercase tracking-widest truncate">
                {currentTrack.artist?.username || currentTrack.artist || 'Verified Creator'}
              </p>
              <RiHeartFill className="text-brand-gray hover:text-red-500 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-grow flex flex-col items-center gap-2">
          <div className="flex items-center gap-10">
            <button className="text-brand-gray hover:text-white transition-all transform active:scale-95">
              <RiSkipBackFill className="text-2xl" />
            </button>
            <button 
              onClick={togglePlay}
              className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl shadow-white/10 group"
            >
              {isPlaying ? (
                <RiPauseFill className="text-2xl group-hover:scale-110 transition-transform" />
              ) : (
                <RiPlayFill className="text-2xl ml-1 group-hover:scale-110 transition-transform" />
              )}
            </button>
            <button className="text-brand-gray hover:text-white transition-all transform active:scale-95">
              <RiSkipForwardFill className="text-2xl" />
            </button>
          </div>
          
          <div className="w-full flex items-center gap-4">
            <span className="text-[10px] text-brand-gray font-mono font-bold">1:24</span>
            <div className="flex-grow h-1.5 bg-white/5 rounded-full relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-brand-gold to-brand-lightgold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-[10px] text-brand-gray font-mono font-bold">3:42</span>
          </div>
        </div>

        {/* Extra Controls */}
        <div className="w-64 flex justify-end items-center gap-6">
          <div className="flex items-center gap-3 w-32 group">
             <RiVolumeUpFill className="text-xl text-brand-gray group-hover:text-brand-gold transition-colors" />
             <div className="flex-grow h-1 bg-white/5 rounded-full relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 h-full w-2/3 bg-white/40 group-hover:bg-brand-gold transition-colors"></div>
             </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default MusicPlayer;
