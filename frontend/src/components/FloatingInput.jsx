import React, { useState } from 'react';

const FloatingInput = ({ label, type = 'text', value, onChange, required = false, placeholder = '' }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? placeholder : ''}
        className={`w-full glass border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold transition-all text-sm font-medium pt-6 pb-2 peer`}
      />
      <label
        className={`absolute left-5 transition-all pointer-events-none uppercase tracking-widest font-black text-[10px] 
          ${(isFocused || value) 
            ? 'top-2 text-brand-gold opacity-100' 
            : 'top-1/2 -translate-y-1/2 text-brand-gray opacity-60'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
