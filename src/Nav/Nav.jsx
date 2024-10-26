
import React from 'react';
import { Link } from 'react-router-dom';


import './Nav.css'; 

const Nav = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">Shopping</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/promotions">Promotions</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="cart">
                    <Link to="/cart">🛒</Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;

