/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import NavPanel from "./components/NavPanel";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react';
import MyReservations from "./pages/MyReservations";
import NewReservation from "./pages/NewReservation";
import NewItem from "./pages/NewItem";

import './App.css';

function App() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  useEffect(() => {
    setMobileView(window.innerWidth < 769)
  }, []);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth > 769) {
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

      {mobileMenuOpen || <MenuIcon className="mobile menu open" onClick={() => toggleMenu()} />}

      {mobileMenuOpen && (
        <>
          <CloseIcon className="mobile menu close" onClick={() => toggleMenu()} />
          <NavPanel />
        </>
      )
      }

      {mobileView || <NavPanel />}
      <Routes>
        <Route path="/new_item" element={<NewItem />} />
        <Route path="/my_reservations" element={<MyReservations />} />
        <Route path="/new_reservation/:itemId" element={<NewReservation />} />
      </Routes>
    </div>
  );
}

export default App;
