import React from 'react';
import GlassCard from '../components/GlassCard';
import SuccessCarousel from '../components/SuccessCarousel';

const About = () => {
  return (
    <div className="w-full min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-60 space-y-40">
        <section className="text-center space-y-8">
          <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-none">
            OUR <span className="text-gradient-gold">MANIFESTO</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray max-w-3xl mx-auto font-medium leading-relaxed">
            The music industry is broken. We are the architects of its replacement. UMyGod is the sovereign protocol for the next generation of sound.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter italic">
              DECENTRALIZING <br /><span className="text-gradient-gold">THE SOUND</span>
            </h2>
            <div className="space-y-6">
              <p className="text-brand-gray text-xl leading-relaxed">
                UMyGod was founded on a simple, radical principle: <span className="text-white font-bold">Creators should own their legacy.</span> For too long, middle-men and opaque distribution systems have siphoned value from the artists who build the culture.
              </p>
              <p className="text-brand-gray text-xl leading-relaxed">
                We've built a high-transparency ecosystem where metadata is king, royalties are real-time, and collaboration happens without borders. This isn't just a platform; it's a sovereign economic zone for musicians and producers.
              </p>
            </div>
            <div className="flex gap-16 pt-6">
               <div className="group">
                 <p className="text-5xl font-black text-brand-gold group-hover:scale-110 transition-transform">0%</p>
                 <p className="text-[10px] uppercase font-black text-brand-gray tracking-[0.2em] mt-2">Platform Revenue Cut*</p>
               </div>
               <div className="group">
                 <p className="text-5xl font-black text-brand-gold group-hover:scale-110 transition-transform">100%</p>
                 <p className="text-[10px] uppercase font-black text-brand-gray tracking-[0.2em] mt-2">Master Asset Ownership</p>
               </div>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute inset-0 bg-brand-gold/10 blur-[120px] -z-10 group-hover:bg-brand-gold/20 transition-all duration-1000"></div>
             <GlassCard className="p-4 border-white/5 overflow-hidden transform group-hover:-rotate-1 transition-all duration-700" hover={false}>
                <img 
                  src="/appDataDir/brain/bb7786ab-772f-4f6d-8635-470b0c371140/umygod_about_vision_1774562491397.png" 
                  className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-1000" 
                  alt="Our Vision" 
                />
             </GlassCard>
          </div>
        </div>

        <section className="py-20">
           <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: 'Transparency', desc: 'Every stream, every cent, tracked on an immutable ledger with zero hidden fees or opaque reporting.' },
                { title: 'Authority', desc: 'Verified ISRC and publishing splits baked into every upload. Your work is your sovereign property.' },
                { title: 'Community', desc: 'A direct-to-creators economy where fans bridge the gap between passion and sustainable growth.' }
              ].map((pillar, i) => (
                <GlassCard key={i} className="p-12 border-white/5 space-y-6 hover:border-brand-gold/20 transition-all duration-500" hover={true}>
                   <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">{pillar.title}</h3>
                   <p className="text-brand-gray text-lg font-medium leading-relaxed">{pillar.desc}</p>
                </GlassCard>
              ))}
           </div>
        </section>

        {/* Success Carousel Integration */}
        <section className="py-20">
           <SuccessCarousel />
        </section>

        <section className="bg-brand-gold/5 rounded-[60px] p-12 lg:p-32 border border-brand-gold/10 relative overflow-hidden">
           <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-gold/10 blur-[150px]"></div>
           <div className="max-w-5xl space-y-12 relative z-10 text-center mx-auto">
              <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none">
                THE TECH <span className="text-gradient-gold">AUTHORITY</span>
              </h2>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-brand-gray font-medium leading-relaxed">
                   Our infrastructure is built for scale. By utilizing decentralized protocols and real-time computation, we ensure that your metadata—your most valuable asset—is never lost or altered. 
                </p>
                <p className="text-xl text-brand-gray font-medium max-w-3xl mx-auto">
                   Whether you are a solo producer in a bedroom studio or a platinum-certified artist, UMyGod provides the same enterprise-grade tools to track your growth and maximize your earnings.
                </p>
              </div>
              <div className="pt-8">
                 <button className="px-16 py-8 bg-brand-gold text-black rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-lightgold transition-all transform hover:scale-105 shadow-[0_20px_60px_rgba(212,175,55,0.3)]">
                    Join the Council
                 </button>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;
