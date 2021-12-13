/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavPanel.module.scss';

const NavPanel = (props) => {

  const handleClick = () => {
    props.onNavClick();
  };

  return (
    <div className={styles.container}>

      <header>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" />
      </header>

      <nav>
        <NavLink to={`${process.env.PUBLIC_URL}/`} onClick={() => handleClick()}>
            ITEMS
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/reserve`} onClick={() => handleClick()}>
            RESERVE ITEM
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/reservations`} onClick={() => handleClick()}>
            MY RESERVATIONS
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/add`} onClick={() => handleClick()}>
            ADD ITEM
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/delete`} onClick={() => handleClick()}>
            DELETE ITEM
        </NavLink>
      </nav>

      <footer>

        <div className={styles.social}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
        </div>

        <small>
          &copy; 2021 Abraham Rodriguez & Akasha Rojee
        </small>

      </footer>

    </div>
  );
};

export default NavPanel;
