import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for client-side navigation

const Navbar = () => (
  <nav>
    <Link to="/" aria-current="page">Home</Link>
    <Link to="/identify">Identify</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </nav>
);

export default Navbar;
