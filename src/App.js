import './App.scss';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import NavPanel from './features/navPanel/NavPanel';
import Main from './features/main/Main';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function hideMenu() {
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    setMobileView(window.innerWidth <= 768);
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
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">

      { (mobileMenuOpen) || (mobileView && (
        <>
          <MenuIcon className="menu open" onClick={() => toggleMenu()} />

          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
        </>
      ))}

      { mobileMenuOpen && (
        <>
          <CloseIcon className="menu close" onClick={() => toggleMenu()} />
          <NavPanel onNavClick={() => hideMenu()} />
        </>
      )}

      { mobileView || (
      <>
        <NavPanel />

        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </>
      )}

    </div>
  );
}

export default App;
