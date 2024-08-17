import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Firebaseapp from './components/Firebaseapp';
import HugoMicroFrontend from './components/HugoMicroFrontend';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    
    if (path.includes('/loggedin')) {
      setIsLoggedIn(true);
      navigate('/login');
    } else if (path.includes('/logout')) {
      setIsLoggedIn(false);
      navigate('/logout');
    }
  }, [location, navigate]);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    if (isLoggedIn) {
      navigate('/logout');
    } else {
      navigate('/loggedin');
    }
  };

  return (
    <div className="App">
      {!isLoggedIn && (
        <button onClick={toggleLogin}>
          Log In
        </button>
      )}

      {isLoggedIn ? <Firebaseapp /> : <HugoMicroFrontend />}
    </div>
  );
}

export default App;
