import React from 'react';
import { Link } from 'react-router-dom';
import { 
  RiTwitterFill, 
  RiInstagramFill, 
  RiDiscordFill, 
  RiSoundcloudLine,
  RiShieldCheckLine,
  RiMailSendLine,
  RiPulseLine,
  RiUserVoiceLine,
  RiCopyrightLine
} from 'react-icons/ri';

const Footer = () => {
  const socials = [
    { icon: RiTwitterFill, link: '#' },
    { icon: RiInstagramFill, link: '#' },
    { icon: RiDiscordFill, link: '#' },
    { icon: RiSoundcloudLine, link: '#' }
  ];

  return (
    <footer className="mt-32 border-t border-white/5 bg-brand-black/50 backdrop-blur-xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-brand-gold/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black text-white tracking-tighter flex items-center gap-2">
              <span className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-black">U</span>
              <span>MY<span className="text-brand-gold">GOD</span></span>
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed font-medium">
              The world's first decentralized music authority. Empowering creators through transparent ownership, real-time royalties, and smart metadata.
            </p>
            <div className="flex gap-4">
               {socials.map((social, i) => (
                 <a key={i} href={social.link} className="w-10 h-10 glass rounded-xl flex items-center justify-center text-xl text-brand-gray hover:text-black hover:bg-brand-gold transition-all border-white/10">
                   <social.icon />
                 </a>
               ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'Marketplace', 'Memberships', 'Networking'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-brand-gray hover:text-brand-gold transition-colors text-sm font-medium">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Authority */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">Authority</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'ISRC Registry'].map(item => (
                <li key={item}>
                  <Link to={item.includes('About') ? '/about' : item.includes('Contact') ? '/contact' : '#'} className="text-brand-gray hover:text-brand-gold transition-colors text-sm font-medium">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-2">Initialize Updates</h4>
            <p className="text-brand-gray text-xs font-medium">Join the council and receive global frequency updates.</p>
            <div className="relative group">
               <input 
                 type="email" 
                 placeholder="your@email.com" 
                 className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white text-xs focus:outline-none focus:border-brand-gold/50 transition-all"
               />
               <button className="absolute right-2 top-2 bottom-2 px-6 bg-brand-gold text-black rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-brand-lightgold shadow-lg shadow-brand-gold/10 flex items-center gap-2">
                 <RiMailSendLine className="text-base" />
                 <span>Subscribe</span>
               </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-brand-gray text-[10px] font-black uppercase tracking-[0.3em]">
            <RiCopyrightLine className="text-lg text-brand-gold" />
            <p>2026 UMyGod Protocol. <span className="text-white">Distributed Ledger Secured.</span></p>
            <RiShieldCheckLine className="text-lg text-brand-gold animate-pulse" />
          </div>
          <div className="flex gap-10">
             <div className="text-center group">
                <div className="flex items-center gap-2 justify-center mb-1">
                  <RiPulseLine className="text-brand-gold text-xl group-hover:scale-110 transition-transform" />
                  <p className="text-white font-black text-xl italic leading-none">12.4M</p>
                </div>
                <p className="text-[9px] uppercase font-black text-brand-gray tracking-tighter group-hover:text-brand-gold transition-colors">Streams Clocked</p>
             </div>
             <div className="text-center group">
                <div className="flex items-center gap-2 justify-center mb-1">
                  <RiUserVoiceLine className="text-brand-gold text-xl group-hover:scale-110 transition-transform" />
                  <p className="text-white font-black text-xl italic leading-none">4.2K</p>
                </div>
                <p className="text-[9px] uppercase font-black text-brand-gray tracking-tighter group-hover:text-brand-gold transition-colors">Verified Artists</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
