// import React from 'react';
// import styles from './App.module.css';
// import Home from "./pages/Home/Home.jsx";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage/Landing.jsx';
// import Login from './pages/Login/Login.jsx';

import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/Landing";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";

import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      // Redirect logic
      if (!user) {
        if (location.pathname === '/home' || location.pathname.startsWith('/player')) {
          navigate('/login');
        }
      } else {
        if (location.pathname === '/login') {
          navigate('/home');
        }
      }

      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, [navigate, location.pathname]);

  const handleSearch = (result) => {
    navigate(`/player/movie/${result.id}`);
  };

  if (checkingAuth) return null; // Or show loading...

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className='App'>
        <Routes>
  <Route path='/' element={<LandingPage />} />
  <Route path='/login' element={<Login />} />
  <Route path='/home' element={<Home onSearch={handleSearch} />} />
  <Route path='/player/:type/:id' element={<Player />} />
  

  <Route path="*" element={<LandingPage />} />
</Routes>

      </div>
    </HelmetProvider>
  );
}

export default App;
