/* eslint-disable */

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './NavPanel.module.scss';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const NavPanel = ({ onNavClick }) => {
  const user = useSelector((state) => state.userReducer.user);
  const handleClick = () => {
    onNavClick();
  };

  return (
    <div className={styles.container}>
      <header>
        <img
          alt="logo"
          src="https://www.graphicsprings.com/filestorage/stencils/8998797059cdb8430f42aa60014ec3b9.png"
        />
      </header>

      <nav>
        <NavLink
          to={`${process.env.PUBLIC_URL}/`}
          onClick={() => handleClick()}
        >
          ITEMS
        </NavLink>

        {user.name ? (
          <>
            <NavLink
              to={`${process.env.PUBLIC_URL}/user`}
              onClick={() => handleClick()}
            >
              {user.name}
            </NavLink>
          </>
        ) : (

            <NavLink
              to={`${process.env.PUBLIC_URL}/user`}
              onClick={() => handleClick()}
            >
              ACCOUNT
            </NavLink>

        )}

        {user.role === 'admin' ? (
          <>
            <NavLink
              to={`${process.env.PUBLIC_URL}/new_reservation/0`}
              onClick={() => handleClick()}
            >
              RESERVE ITEM
            </NavLink>
            <NavLink
              to={`${process.env.PUBLIC_URL}/my_reservations`}
              onClick={() => handleClick()}
            >
              MY RESERVATIONS
            </NavLink>
            <NavLink
              to={`${process.env.PUBLIC_URL}/add`}
              onClick={() => handleClick()}
            >
              ADD ITEM
            </NavLink>
            <NavLink
              to={`${process.env.PUBLIC_URL}/delete`}
              onClick={() => handleClick()}
            >
              DELETE ITEM
            </NavLink>
          </>
        ) : null}
      </nav>

      <footer>
        <div className={styles.social}>
          <a href="https://twitter.com" aria-label="twitter"><TwitterIcon /></a>
          <a href="https://google.com" aria-label="google"><GoogleIcon /></a>
          <a href="https://facebook.com" aria-label="facebook"><FacebookRoundedIcon /></a>
          <a href="https://instagram.com" aria-label="instagram"><InstagramIcon /></a>
          <a href="https://pinterest.com" aria-label="pinterest"><PinterestIcon /></a>
        </div>
        <small>&copy; 2021 Abraham Rodriguez & Akasha Rojee</small>
      </footer>
    </div>
  );
};

NavPanel.propTypes = {
  onNavClick: PropTypes.func,
};

NavPanel.defaultProps = {
  onNavClick: () => { },
};

export default NavPanel;
