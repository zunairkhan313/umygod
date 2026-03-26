import React from 'react';
import GlassCard from '../components/GlassCard';

const Memberships = () => {
  const tiers = [
    {
      name: 'Basic Fan',
      price: 'Free',
      features: ['Standard Music Streams', 'Follow Artists', 'Public Community Access'],
      cta: 'Current Plan',
      glass: 'border-white/10'
    },
    {
      name: 'Premium Member',
      price: '$9.99/mo',
      features: ['Early Music Releases', 'Ad-Free Experience', 'Exclusive Content Access', 'Priority Event Tickets'],
      cta: 'Upgrade to Premium',
      glass: 'border-brand-gold/30 bg-brand-gold/5',
      featured: true
    },
    {
      name: 'VIP Creator',
      price: '$24.99/mo',
      features: ['All Premium Features', 'Private Event Invites', 'Royalty Participation Ops', 'Direct Messaging to Artists'],
      cta: 'Go VIP',
      glass: 'border-purple-500/30 bg-purple-500/5'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 text-center">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          CHOOSE YOUR <span className="text-gradient-gold">ACCESS</span>
        </h1>
        <p className="text-brand-gray text-xl max-w-2xl mx-auto font-medium">
          Support your favorite creators directly and unlock exclusive content, early releases, and private events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <GlassCard key={i} className={`flex flex-col p-10 ${tier.glass} ${tier.featured ? 'scale-105 z-10' : ''}`}>
            {tier.featured && (
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/20 self-center mb-6">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-black text-white mb-2">{tier.name}</h3>
            <div className="text-4xl font-black text-white mb-8">
              {tier.price.split('/')[0]}
              {tier.price.includes('/') && <span className="text-sm text-brand-gray font-bold">/{tier.price.split('/')[1]}</span>}
            </div>
            
            <ul className="text-left space-y-5 mb-12 flex-grow">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-brand-gray text-sm font-medium">
                  <span className="text-brand-gold font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all ${
              tier.featured 
                ? 'bg-brand-gold text-black shadow-xl shadow-brand-gold/20 hover:bg-brand-lightgold top-transition' 
                : 'glass border border-white/10 text-white hover:bg-white/5'
            }`}>
              {tier.cta}
            </button>
          </GlassCard>
        ))}
      </div>

      <div className="mt-20">
        <p className="text-brand-gray text-sm font-medium">
          Payments are handled securely via encrypted metadata tracking. <br />
          <span className="text-white">Cancel or upgrade anytime from your dashboard.</span>
        </p>
      </div>
    </div>
  );
};

export default Memberships;
