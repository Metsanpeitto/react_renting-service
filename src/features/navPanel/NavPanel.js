/* eslint-disable */

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './NavPanel.module.scss';

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
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
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
          <img
            alt="twitter"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU"
          />

          <img
            alt="facebook"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU"
          />

          <img
            alt="google"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU"
          />

          <img
            alt="vimeo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU"
          />

          <img
            alt="pinterest"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU"
          />
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
