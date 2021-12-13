/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavPanel = ( )=> {

  return (
    <div>

      <header>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" />
      </header>

      <nav>
        <NavLink to={`${process.env.PUBLIC_URL}/`}>
            ITEMS
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/reserve`}>
            RESERVE ITEM
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/reservations`}>
            MY RESERVATIONS
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/add`}>
            ADD ITEM
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/delete`}>
            DELETE ITEM
        </NavLink>
      </nav>

      <footer>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
        </div>

        <span>
          &copy; 2021 Abraham Rodriguez & Akasha Rojee
        </span>

      </footer>

    </div>
  );
};

export default NavPanel;
