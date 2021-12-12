/* eslint-disable */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavPanel.module.scss';


const NavPanel = (props) => {

    const handleClick = () => {
      props.onNavClick();
    };

    return (
      <div className={styles.sidebar}>

        <header className={styles.header}>
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" />
        </header>

        <nav>
          <NavLink
              key="items"
              to={`${process.env.PUBLIC_URL}/`}
              activeClassName="active"
              onClick={() => handleClick()}
          >
              ITEMS
          </NavLink>
          <NavLink
              key="reserve"
              to={`${process.env.PUBLIC_URL}/reserve`}
              activeClassName="active"
              onClick={() => handleClick()}
          >
              RESERVE
          </NavLink>
          <NavLink
              key="reservations"
              to={`${process.env.PUBLIC_URL}/reservations`}
              activeClassName="active"
              onClick={() => handleClick()}
          >
              MY RESERVATIONS
          </NavLink>
          <NavLink
              key="add"
              to={`${process.env.PUBLIC_URL}/new_item`}
              activeClassName="active"
              onClick={() => handleClick()}
          >
              ADD ITEM
          </NavLink>
          <NavLink
              key="delete"
              to={`${process.env.PUBLIC_URL}/delete`}
              activeClassName="active"
              onClick={() => handleClick()}
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
