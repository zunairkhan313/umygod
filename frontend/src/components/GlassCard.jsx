import React from 'react';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div className={`glass-card p-6 rounded-2xl ${hover ? 'hover:shadow-lg hover:shadow-brand-gold/10' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
