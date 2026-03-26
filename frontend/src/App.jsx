import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import Memberships from './pages/Memberships';
import Networking from './pages/Networking';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import { AuthProvider } from './context/AuthContext';
import { PlayerProvider } from './context/PlayerContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <PlayerProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-brand-black selection:bg-brand-gold selection:text-black">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/memberships" element={<Memberships />} />
                <Route 
                  path="/networking" 
                  element={
                    <ProtectedRoute>
                      <Networking />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <MusicPlayer />
          </div>
        </Router>
      </PlayerProvider>
    </AuthProvider>
  );
}

export default App;
