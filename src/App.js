/* eslint-disable */

import logo from './logo.svg';
import './App.scss';
import NavPanel from "./common/components/NavPanel/NavPanel";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Routes ,Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Main from './features/main/Main';
import NewItem from './features/newitem/NewItem';


function App() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function hideMenu() {
    setMobileMenuOpen(false);
    console.log('hide');
  };

  useEffect(() => {
    setMobileView(window.innerWidth < 769)
  }, []);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
        setMobileView(false);
      } else if (window.innerWidth < 769) {
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

      {mobileMenuOpen || mobileView && (
          <>
            <MenuIcon className="mobile menu open" onClick={() => toggleMenu()}/>

            <Routes>
              <Route exact path="/" element={<Main />} />
            </Routes>
          </>
        )
      }
    
      { mobileMenuOpen && (
          <>
            <CloseIcon className="mobile menu close" onClick={() => toggleMenu()} />
            <NavPanel onNavClick={() => hideMenu()} />
          </> 
        )
      }

      { mobileView || (
          <>
            <NavPanel />

            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/new_item" element={<NewItem />} />
            </Routes>
          </>
        )
      }

     

    </div>
  );
}

export default App;
