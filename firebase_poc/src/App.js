import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Firebaseapp from './components/Firebaseapp';
import HugoMicroFrontend from './components/HugoMicroFrontend';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const marketingSiteRoutes = ['/about', '/posts', '/home'];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const loginStatus = queryParams.get('login');

    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    } else if (loginStatus === 'false') {
      setIsLoggedIn(false);
    }
  }, [location]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/?login=true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/?login=false');
  };

  const shouldShowMarketingSite = marketingSiteRoutes.some(route => 
    location.pathname.startsWith(route)
  );

  return (
    <div className="App">
      {shouldShowMarketingSite ? (
        <HugoMicroFrontend />
      ) : isLoggedIn ? (
        <>
          <button onClick={handleLogout}>
            Log Out
          </button>
          <Firebaseapp />
        </>
      ) : (
        <>
          <button onClick={handleLogin}>
            Log In
          </button>
          <HugoMicroFrontend />
        </>
      )}
    </div>
  );
}

export default App;