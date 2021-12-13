import './App.scss';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import NavPanel from './features/navPanel/NavPanel';
import Main from './features/main/Main';
import NewItem from './features/newItem/NewItem';
import ReserveItem from './features/reserveItem/ReserveItem';

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
            <Route path="/add" element={<NewItem />} />
            <Route path="/reserve" element={<ReserveItem />} />
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
          <Route path="/add" element={<NewItem />} />
          <Route path="/reserve" element={<ReserveItem />} />
        </Routes>
      </>
      )}

    </div>
  );
}

export default App;
