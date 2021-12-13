/* eslint-disable */

import './App.scss';
import NavPanel from './features/navPanel/NavPanel';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function App() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  
  useEffect(() => {
    setMobileView(window.innerWidth <= 768)
  }, []);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
        setMobileView(false);
      } else if (window.innerWidth <= 768) {
        setMobileView(true);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize)
    };

  }, []);

  return (
    <div className="App">
      
      { mobileMenuOpen || mobileView && (
        <>
          <MenuIcon className="menu open" onClick={() => toggleMenu()} />
        </>
      )}

      { mobileMenuOpen && (
        <>
          <CloseIcon className="menu close" onClick={() => toggleMenu()} />
          <NavPanel />
        </> 
      )}

      { mobileView || (
          <>
            <NavPanel />
          </>
        )
      }

    </div>
  );
}

export default App;
