import React, { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <PlayerContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlay }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
