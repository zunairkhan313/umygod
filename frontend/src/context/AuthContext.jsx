import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Configure axios defaults
  // axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.baseURL = 'https://umygod.expertcodecraft.com';

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchProfile();
    } else {
      delete axios.defaults.headers.common['Authorization'];
      setLoading(false);
    }
  }, [token]);

  const fetchProfile = async () => {
    try {
      const res = await axios.get('/api/auth/profile');
      setUser(res.data);
    } catch (err) {
      console.error('Profile fetch failed', err);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      const { token: receivedToken, ...userData } = res.data;
      localStorage.setItem('token', receivedToken);
      setToken(receivedToken);
      setUser(userData);
      return true;
    } catch (err) {
      throw err.response?.data || { message: 'Login failed' };
    }
  };

  const register = async (username, email, password, role = 'artist') => {
    try {
      const res = await axios.post('/api/auth/register', { username, email, password, role });
      const { token: receivedToken, ...userData } = res.data;
      localStorage.setItem('token', receivedToken);
      setToken(receivedToken);
      setUser(userData);
      return true;
    } catch (err) {
      throw err.response?.data || { message: 'Registration failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
