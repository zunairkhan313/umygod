import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import FloatingInput from '../components/FloatingInput';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '', alias: '' });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (isLogin) {
        await login(form.email, form.password);
      } else {
        await register(form.alias, form.email, form.password, 'artist');
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Authentication failed. Check credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden px-4">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <GlassCard className="w-full max-w-md p-10 border-white/10" hover={false}>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-3 text-white tracking-tight">
            {isLogin ? 'Welcome ' : 'Start Your '}<span className="text-gradient-gold">{isLogin ? 'Back' : 'Legacy'}</span>
          </h2>
          <p className="text-brand-gray font-medium">
            {isLogin ? 'Sign in to manage your music business' : 'Join the world\'s first creator-owned ecosystem'}
          </p>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold text-center animate-shake">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-2">
          {!isLogin && (
            <FloatingInput 
              label="Public Alias"
              placeholder="e.g. CreatorName"
              value={form.alias}
              onChange={(e) => setForm({...form, alias: e.target.value})}
              required
            />
          )}
          
          <FloatingInput 
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
            required
          />
          
          <FloatingInput 
            label="Secret Key"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => setForm({...form, password: e.target.value})}
            required
          />
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-5 bg-brand-gold text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-lightgold shadow-xl shadow-brand-gold/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? 'Initializing...' : isLogin ? 'Initialize Session' : 'Create Catalyst'}
          </button>
        </form>
        
        <div className="mt-8 text-center border-t border-white/5 pt-8">
          <button 
            type="button"
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            className="text-brand-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            {isLogin ? "No Access? Request an Account" : "Registered? Identify Here"}
          </button>
        </div>
      </GlassCard>
    </div>
  );
};

export default Login;
