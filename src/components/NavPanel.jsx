/* eslint-disable */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavPanel.module.scss';


const NavPanel = () => {
  return (
    <div className={styles.sidebar}>

      <header className={styles.header}>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" />
      </header>

      <nav>
        <NavLink
          key="items"
          to={`${process.env.PUBLIC_URL}/`}
          activeclassname="active"
        >
          ITEMS
        </NavLink>
        <Link
          key="new_item"
          to={`${process.env.PUBLIC_URL}/new_item`}
          active="true"
          activeclassname="nav-link"
        >
          NEW ITEM
        </Link>
        <NavLink
          key="reserve"
          to={`${process.env.PUBLIC_URL}/new_reserve`}
          activeclassname="active"
        >
          NEW RESERVE
        </NavLink>
        <NavLink
          key="reservations"
          to={`${process.env.PUBLIC_URL}/my_reservation`}
          activeclassname="active"
        >
          MY RESERVATIONS
        </NavLink>
        <NavLink
          key="add"
          to={`${process.env.PUBLIC_URL}/add`}
          activeclassname="active"
        >
          ADD ITEM
        </NavLink>
        <NavLink
          key="delete"
          to={`${process.env.PUBLIC_URL}/delete`}
          activeclassname="active"
        >
          DELETE ITEM
        </NavLink>
      </nav>

      <div className={styles.footer}>

        <div className={styles.social}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
        </div>

        <span>
          Copyright blabla 2021
        </span>

      </div>

    </div>
  );
};

export default NavPanel;
