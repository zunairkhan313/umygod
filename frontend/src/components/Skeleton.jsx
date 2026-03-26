import React from 'react';

const Skeleton = ({ className }) => {
  return (
    <div className={`bg-white/5 overflow-hidden relative group rounded-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full animate-shimmer"></div>
    </div>
  );
};

export default Skeleton;
