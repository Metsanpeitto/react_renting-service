import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer } from 'react-toastify';
import NavPanel from './features/navPanel/NavPanel';
import Main from './features/main/Main';
import NewItem from './features/newItem/NewItem';
import NewReservation from './features/newReservation/NewReservation';
import User from './features/user/User';
import SignUp from './features/user/SignUp';
import MyReservations from './features/myReservations/MyReservations';
import Details from './features/details/Details';
import MyReservations from './features/myReservations/MyReservations';
import Delete from './features/deleteItem/DeleteItem';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

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
      <ToastContainer />
      {(mobileMenuOpen) || (mobileView && (
        <>
          <MenuIcon className="menu open" onClick={() => toggleMenu()} />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/details/:itemName" element={<Details />} />
            <Route path="/add" element={<NewItem />} />

            <Route path="/new_reservation/:itemId" element={<NewReservation />} />

            <Route path="/my_reservations" element={<MyReservations />} />
            <Route path="/user" element={<User />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </>
      ))}

      {mobileMenuOpen && (
        <>
          <CloseIcon className="menu close" onClick={() => toggleMenu()} />
          <NavPanel onNavClick={() => hideMenu()} />
        </>
      )}

      {mobileView || (
        <>
          <NavPanel />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/details/:itemName" element={<Details />} />
            <Route path="/add" element={<NewItem />} />
            <Route path="/new_reservation/:itemId" element={<NewReservation />} />
            <Route path="/my_reservations" element={<MyReservations />} />
            <Route path="/user" element={<User />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </>
      )}

    </div>
  );
}

export default App;
