import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Firebaseapp from './components/Firebaseapp';
import HugoMicroFrontend from './components/HugoMicroFrontend';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const marketingRoutes = ['/about', '/posts', '/home'];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const loginStatus = queryParams.get('login');

    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    } else if (loginStatus === 'false') {
      setIsLoggedIn(false);
    }

    // Listen for messages from the iframe
    window.addEventListener('message', handleIframeNavigation);

    return () => {
      window.removeEventListener('message', handleIframeNavigation);
    };
  }, [location]);

  const handleIframeNavigation = (event) => {
    // Ensure the message is from your marketing subdomain
    console.log(event)
    if (event.origin === "https://marketing.alphantech.fyi") {
      const path = event.data.path;
      // Update the browser URL without reloading the page
      window.history.pushState(null, '', path);
      if (event.data.type === 'navigation') {
        // Update parent URL
        window.history.pushState(null, '', event.data.path);
      } else if (event.data.type === 'externalNavigation') {
        // Handle external link navigation
        window.open(event.data.url, '_blank');
      }
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/?login=true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/?login=false');
  };

  const shouldShowMarketingContent = marketingRoutes.some(route => 
    location.pathname.startsWith(route)
  );

  return (
    <div className="App">
      {shouldShowMarketingContent ? (
        <HugoMicroFrontend />
      ) : isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Log Out</button>
          <Firebaseapp />
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Log In</button>
          <HugoMicroFrontend />
        </>
      )}
    </div>
  );
}

export default App;