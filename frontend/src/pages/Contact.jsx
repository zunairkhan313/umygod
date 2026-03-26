import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import FloatingInput from '../components/FloatingInput';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message transmitted to HQ. Expect a pulse soon.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          GET IN <span className="text-gradient-gold">TOUCH</span>
        </h1>
        <p className="text-brand-gray text-xl font-medium">Have a question or need priority support? Our team of humans is ready to assist.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <GlassCard className="p-8 border-brand-gold/10">
            <h3 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-4">Direct Channel</h3>
            <p className="text-xl font-bold text-white mb-2">support@umygod.app</p>
            <p className="text-sm text-brand-gray font-medium">Global support available 24/7.</p>
          </GlassCard>
          <GlassCard className="p-8 border-white/5">
            <h3 className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-4">Headquarters</h3>
            <p className="text-xl font-bold text-white mb-2">Techno District, NY</p>
            <p className="text-sm text-brand-gray font-medium">Innovation Park, Suite 404</p>
          </GlassCard>
        </div>

        <GlassCard className="lg:col-span-2 p-12 border-white/5">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid md:grid-cols-2 gap-6">
              <FloatingInput 
                label="Full Name" 
                value={form.name} 
                onChange={(e) => setForm({...form, name: e.target.value})} 
                required 
              />
              <FloatingInput 
                label="Email Address" 
                type="email" 
                value={form.email} 
                onChange={(e) => setForm({...form, email: e.target.value})} 
                required 
              />
            </div>
            <FloatingInput 
              label="Subject" 
              value={form.subject} 
              onChange={(e) => setForm({...form, subject: e.target.value})} 
              required 
            />
            <div className="relative mb-8">
              <textarea
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                required
                className="w-full h-40 glass border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-gold transition-all text-sm font-medium pt-8 peer"
              />
              <label className={`absolute left-5 transition-all pointer-events-none uppercase tracking-widest font-black text-[10px] ${form.message ? 'top-2 text-brand-gold opacity-100' : 'top-6 text-brand-gray opacity-60'}`}>Your Message</label>
            </div>
            
            <button type="submit" className="w-full py-5 bg-brand-gold text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-lightgold shadow-xl shadow-brand-gold/20 transition-all">
              Initialize Transmission
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default Contact;
