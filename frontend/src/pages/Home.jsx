import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import Skeleton from '../components/Skeleton';
import SuccessCarousel from '../components/SuccessCarousel';
import { usePlayer } from '../context/PlayerContext';
import {
    RiFlashlightLine,
    RiArrowLeftSLine,
    RiArrowRightSLine,
    RiArrowRightLine,
    RiPlayFill,
    RiDatabase2Line,
    RiGroupLine,
    RiMoneyDollarCircleLine,
    RiVerifiedBadgeLine,
    RiDoubleQuotesL,
    RiUserSharedLine,
    RiFileMusicLine,
    RiStockLine,
    RiPulseLine,
    RiShieldStarLine,
    RiNodeTree,
    RiExchangeFundsLine,
    RiSearchEyeLine,
    RiLock2Line,
    RiGlobalLine,
    RiSearchLine
} from 'react-icons/ri';

const Home = () => {
    const [latestDrops, setLatestDrops] = useState([]);
    const [loading, setLoading] = useState(true);
    const { playTrack } = usePlayer();

    useEffect(() => {
        const fetchDrops = async () => {
            try {
                const res = await axios.get('/api/music');
                setLatestDrops(res.data.slice(0, 4));
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchDrops();
    }, []);

    return (
        <div className="w-full min-h-screen pt-20 relative overflow-hidden">
            <style>
                {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
          }
          @keyframes orbitInverse {
            from { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
            to { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          }
          @keyframes pulseBlob {
            0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.2; }
            50% { transform: scale(1.2) translate(50px, 30px); opacity: 0.4; }
          }
          .animate-orbit { animation: orbit 15s linear infinite; }
          .animate-orbit-slow { animation: orbitInverse 25s linear infinite; }
          .animate-pulse-blob { animation: pulseBlob 12s ease-in-out infinite; }
          .glass-frame {
            background: rgba(15, 15, 15, 0.4);
            backdrop-filter: blur(40px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
          }
        `}
            </style>

            {/* Decorative Background Blobs */}
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 blur-[150px] animate-pulse-blob -z-10"></div>
            <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[180px] animate-pulse-blob delay-2000 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[200px] animate-pulse-blob delay-1000 -z-10"></div>

            {/* Hero Section - Redesigned Glass Container */}
            <section className="relative min-h-[95vh] flex items-center justify-center px-4 py-20">
                <div className="max-w-[1400px] w-full glass-frame rounded-[4rem] p-8 md:p-12 lg:p-24 flex flex-col gap-12 overflow-hidden relative">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center flex-1">
                        {/* Left Side: Content */}
                        <div className="flex-1 space-y-10 z-10 text-center lg:text-left">
                            <div className="space-y-4">
                                <p className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] opacity-80">
                                    Creativity with 100% Result
                                </p>
                                <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                                    One Protocol To <br />
                                    <span className="text-brand-gold">Reward, Recognize</span> <br />
                                    & Empower Your Legacy.
                                </h1>
                            </div>

                            <p className="text-brand-gray text-lg md:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
                                The ultimate sovereign platform for modern sonic architects. Own your master assets, direct your revenue, and build a localized economy with zero middlemen.
                            </p>

                            <div className="pt-4 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                <Link to="/login" className="px-14 py-7 bg-brand-gold text-black rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:scale-105 shadow-[0_20px_60px_rgba(212,175,55,0.3)] flex items-center justify-center gap-4 group">
                                    <span>Start Journey now</span>
                                    <RiArrowRightLine className="text-xl group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Visuals (Artist & Orbiters) */}
                        <div className="flex-1 relative flex items-center justify-center min-h-[400px]" style={{ maxWidth: '400px' }}>
                            {/* Central Artist Image */}
                            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full glass-frame border-2 border-brand-gold/30 p-2 overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.1)]">
                                <div className="absolute inset-0 bg-brand-gold/10 opacity-30 animate-pulse"></div>
                                <img
                                    src="https://tse2.mm.bing.net/th/id/OIP.q8Lupq_IJiXQi2Zq2dUoKgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
                                    alt="Main Artist"
                                />
                            </div>

                            {/* Orbiting Creators */}
                            {[
                                { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200', anime: 'animate-orbit' },
                                { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200', anime: 'animate-orbit-slow' },
                                { img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200', anime: 'animate-orbit' }
                            ].map((avatar, i) => (
                                <div key={i} className={`absolute ${avatar.anime} w-16 h-16 md:w-24 md:h-24 p-1 glass-frame rounded-full border-2 border-white/20`}>
                                    <img
                                        src={avatar.img}
                                        className="w-full h-full object-cover rounded-full"
                                        alt={`Creator ${i}`}
                                    />
                                </div>
                            ))}

                            {/* Decorative Geometric Ring */}
                            <div className="absolute w-[130%] h-[130%] border border-white/5 rounded-full -z-10 animate-spin-slow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Ribbon */}
            <div className="bg-brand-gold/5 border-y border-white/5 py-12 backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_100%)]"></div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-white relative z-10">
                    <div className="flex flex-col items-center">
                        <RiPulseLine className="text-3xl text-brand-gold/40 mb-2 animate-pulse" />
                        <p className="text-3xl lg:text-5xl font-black text-brand-gold mb-1">12M+</p>
                        <p className="text-[10px] uppercase tracking-widest text-brand-gray font-black">Global Streams</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <RiGroupLine className="text-3xl text-brand-gold/40 mb-2 animate-pulse" />
                        <p className="text-3xl lg:text-5xl font-black text-brand-gold mb-1">45K+</p>
                        <p className="text-[10px] uppercase tracking-widest text-brand-gray font-black">Active Creators</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <RiMoneyDollarCircleLine className="text-3xl text-brand-gold/40 mb-2 animate-pulse" />
                        <p className="text-3xl lg:text-5xl font-black text-brand-gold mb-1">$8M</p>
                        <p className="text-[10px] uppercase tracking-widest text-brand-gray font-black">Paid to Artists</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <RiVerifiedBadgeLine className="text-3xl text-brand-gold/40 mb-2 animate-pulse" />
                        <p className="text-3xl lg:text-5xl font-black text-brand-gold mb-1">100%</p>
                        <p className="text-[10px] uppercase tracking-widest text-brand-gray font-black">Creator Owned</p>
                    </div>
                </div>
            </div>

            {/* The Metadata Registry - NEW SECTION */}
            <section className="py-60 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] -z-10"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-8">
                            <GlassCard className="inline-block px-4 py-2 border-brand-gold/20" hover={false}>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">Technical Sovereignity</span>
                            </GlassCard>
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter italic">
                                THE <span className="text-gradient-gold">INTELLIGENCE</span><br />REGISTRY
                            </h2>
                            <p className="text-brand-gray text-xl leading-relaxed max-w-xl">
                                Every track on UMyGod is more than just audio. It's a cryptographically secured asset with immutable ISRC tracking and real-time publishing verification.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                                {[
                                    { title: 'ISRC Auditing', icon: RiSearchEyeLine, desc: 'Automated fingerprinting for global compliance.' },
                                    { title: 'Smart Contracts', icon: RiLock2Line, desc: 'Self-executing royalty agreements.' },
                                    { title: 'Direct Publishing', icon: RiGlobalLine, desc: 'Real-time PRO communication.' },
                                    { title: 'Master Security', icon: RiShieldStarLine, desc: 'High-fidelity vault for your originals.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                                            <item.icon className="text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-brand-gray text-xs leading-none">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] -z-10 group-hover:bg-brand-gold/20 transition-all duration-1000"></div>
                            <GlassCard className="p-2 border-white/10 rotate-1 group-hover:rotate-0 transition-transform duration-700 overflow-hidden" hover={false}>
                                <div className="aspect-video bg-brand-black rounded-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                        <RiNodeTree className="text-9xl text-brand-gold animate-pulse" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-8 space-y-4 bg-gradient-to-t from-black to-transparent">
                                        <div className="flex justify-between items-center text-[10px] font-black uppercase text-brand-gold tracking-widest">
                                            <span>Registry Stream</span>
                                            <span className="animate-pulse">Active</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-brand-gold"></div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Drops Section */}
            <section className="py-60 px-4 relative">
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-gold/5 blur-[120px] -z-10"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-4 gap-6">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 italic uppercase tracking-tighter leading-none">
                                LATEST <span className="text-gradient-gold">CATALYSTS</span>
                            </h2>
                            <p className="text-brand-gray text-xl font-medium">New frequencies detected in the ecosystem.</p>
                        </div>
                        <Link to="/marketplace" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-gold border-b border-brand-gold/30 pb-1 hover:text-white hover:border-white transition-all group">
                            <span>View All Entries</span>
                            <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {loading ? (
                            [...Array(4)].map((_, i) => (
                                <div key={i} className="p-4 glass border border-white/5 rounded-2xl space-y-4">
                                    <Skeleton className="aspect-square rounded-xl" />
                                    <Skeleton className="h-6 w-3/4 rounded-lg" />
                                    <Skeleton className="h-4 w-1/2 rounded-lg" />
                                </div>
                            ))
                        ) : (
                            latestDrops.map(track => (
                                <GlassCard key={track.id} className="p-4 border-white/5 hover:border-brand-gold/20 transition-all group cursor-pointer" hover={true}>
                                    <div className="aspect-square glass rounded-xl mb-4 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-brand-gold/5 flex items-center justify-center font-black text-5xl text-brand-gold/20">U</div>
                                        {track.coverArtUrl ? (
                                            <img src={track.coverArtUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={track.title} />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-brand-black to-brand-gold/10"></div>
                                        )}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button
                                                onClick={() => playTrack(track)}
                                                className="w-14 h-14 bg-brand-gold text-black rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-2xl shadow-brand-gold/40"
                                            >
                                                <RiPlayFill className="text-2xl ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{track.title}</h3>
                                    <p className="text-brand-gray text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                        <RiVerifiedBadgeLine className="text-brand-gold" />
                                        {track.artist?.username || 'Verified Creator'}
                                    </p>
                                </GlassCard>
                            ))
                        )}
                        {!loading && latestDrops.length === 0 && (
                            <div className="col-span-full py-20 text-center glass border border-white/10 rounded-3xl">
                                <RiNodeTree className="text-5xl text-brand-gold/20 mx-auto mb-4 animate-pulse" />
                                <p className="text-brand-gray font-black uppercase tracking-widest text-xs opacity-30 italic">Registry synchronization in progress...</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-60 px-4 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-gold/5 blur-[120px] -translate-y-1/2 -z-10"></div>
                <div className="max-w-7xl mx-auto">
                    <SuccessCarousel />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-60 px-4 bg-brand-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-tight italic">
                                YOUR JOURNEY TO <span className="text-gradient-gold">INDEPENDENCE</span>
                            </h2>
                            <div className="space-y-12">
                                {[
                                    { step: '01', title: 'Initialize Profile', desc: 'Secure your identity as an Artist or Producer in the global registry.', icon: RiUserSharedLine },
                                    { step: '02', title: 'Catalog Assets', desc: 'Upload high-fidelity masters with professional ISRC and publishing metadata.', icon: RiFileMusicLine },
                                    { step: '03', title: 'Exponential Growth', desc: 'Directly monetize through marketplace sales, licensing, and fan memberships.', icon: RiStockLine }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-4xl font-black text-brand-gold/20 group-hover:text-brand-gold transition-colors duration-500 font-mono">{item.step}</span>
                                            <item.icon className="text-2xl text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-brand-gray line-clamp-2">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-brand-gold/10 blur-[80px] -z-10 group-hover:bg-brand-gold/20 transition-all duration-1000"></div>
                            <GlassCard className="p-4 border-white/10 overflow-hidden transform group-hover:rotate-1 transition-all duration-500">
                                <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800&auto=format&fit=crop" className="w-full h-auto rounded-xl opacity-80" alt="Process" />
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Creative Pulse - NEW SECTION */}
            <section className="py-60 px-4 relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] -z-10"></div>
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 italic uppercase tracking-tighter leading-none">
                        THE CREATIVE <span className="text-gradient-gold">PULSE</span>
                    </h2>
                    <p className="text-brand-gray text-xl font-medium max-w-3xl mx-auto mb-20">
                        More than a catalog. A living, breathing network of the world's most elite sonic architects. Collaborate in real-time, share stems, and build the future of sound together.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { label: 'Stem Exchange', icon: RiExchangeFundsLine },
                            { label: 'Real-time Collabs', icon: RiPulseLine },
                            { label: 'Pro Networking', icon: RiGroupLine },
                            { label: 'Asset Custody', icon: RiLock2Line }
                        ].map((item, i) => (
                            <GlassCard key={i} className="p-10 border-white/5 flex flex-col items-center justify-center gap-6 group hover:border-brand-gold/40 transition-all duration-500" hover={true}>
                                <div className="w-20 h-20 rounded-2xl glass border border-white/10 flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <item.icon className="text-4xl" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-white group-hover:text-brand-gold transition-colors">{item.label}</span>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Revenue Authority - NEW SECTION */}
            <section className="py-60 px-4 bg-white/[0.01] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter italic">
                                REVENUE <br /><span className="text-gradient-gold">AUTHORITY</span>
                            </h2>
                            <p className="text-brand-gray text-xl leading-relaxed">
                                We've built the world's first direct-to-creator monetization engine. No middlemen, no opaque reporting—just pure revenue direct to your wallet.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    '100% Marketplace Earnings Retained',
                                    'Direct-to-Fan Membership Tiers',
                                    'Algorithmic Sync Licensing Discovery',
                                    'Real-time Royalty Transparency'
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white font-bold group">
                                        <RiVerifiedBadgeLine className="text-brand-gold text-2xl group-hover:scale-125 transition-transform" />
                                        <span className="uppercase tracking-widest text-xs">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 grid grid-cols-1 gap-6 w-full">
                            {[
                                { tier: 'Fan Citizen', price: 'Free', features: ['Public Catalog Access', 'Digital Drops', 'Core Community'], color: 'border-white/10' },
                                { tier: 'Verified Creator', price: '$29/mo', features: ['Global Registry Access', 'Smart Metadata', 'Marketplace Store'], color: 'border-brand-gold/30' },
                                { tier: 'Sonic Authority', price: '$99/mo', features: ['Sync Licensing Hub', 'Priority ISRC', 'Concierge Support'], color: 'border-white/20' }
                            ].map((tier, i) => (
                                <GlassCard key={i} className={`p-8 border ${tier.color} flex justify-between items-center group hover:bg-white/5 transition-all`} hover={false}>
                                    <div>
                                        <h4 className="text-brand-gold font-black uppercase tracking-widest text-xs mb-1">{tier.tier}</h4>
                                        <div className="flex gap-4">
                                            {tier.features.map((f, j) => (
                                                <span key={j} className="text-[9px] text-brand-gray uppercase tracking-tighter">{f}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-black text-white italic">{tier.price}</span>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-60 px-4">
                <div className="max-w-7xl mx-auto">
                    <GlassCard className="p-16 border-white/5 bg-white/[0.01] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[80px]"></div>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter italic text-white">
                                    BUILT FOR <span className="text-gradient-gold">CREATORS</span>, BY CREATORS.
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-lg text-brand-gray">Artists stay on platforms when they can see exactly how much money they are making. UMyGod gives you the dashboard of a major label, but keeps <span className="text-white font-bold">100% of the control in your hands.</span></p>
                                    <p className="text-lg text-brand-gray">Connect with producers, license your tracks to game developers, and build a loyal community with exclusive membership tiers.</p>
                                </div>
                                <Link to="/contact" className="inline-block mt-10 text-xs font-black uppercase tracking-widest text-brand-gold border-b-2 border-brand-gold/30 pb-2 hover:border-brand-gold transition-all flex items-center gap-2 group">
                                    <span>Support & Partnership Inquiry</span>
                                    <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { title: "Real-time Royalties", icon: RiExchangeFundsLine },
                                    { title: "Smart Metadata", icon: RiNodeTree },
                                    { title: "Sync Licensing", icon: RiShieldStarLine },
                                    { title: "Community Hub", icon: RiGroupLine }
                                ].map((item, i) => (
                                    <GlassCard key={i} className="flex flex-col items-center justify-center p-8 text-center aspect-square border-brand-gold/10 hover:border-brand-gold/30 group">
                                        <item.icon className="text-5xl text-brand-gold mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                                        <span className="font-bold text-[10px] uppercase tracking-widest leading-none">{item.title}</span>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </section>
        </div>
    );
};

export default Home;
