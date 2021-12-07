/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const NavPanel = () => {
    return (
        <nav className="nav-panel">
            <div className="header">
                <Link
                    key="items"
                    to={`${process.env.PUBLIC_URL}/`}
                    active="true"
                    className="nav-link"
                >
                   Items
                </Link>
                <Link
                    key="reserve"
                    to={`${process.env.PUBLIC_URL}/reserve`}
                    active="true"
                    className="nav-link"
                >
                    Reserve
                </Link>
                <Link
                    key="reservations"
                    to={`${process.env.PUBLIC_URL}/reservations`}
                    active="true"
                    className="nav-link"
                >
                    My reservations
                </Link>
            </div>
        </nav>
    );
};

export default NavPanel;
