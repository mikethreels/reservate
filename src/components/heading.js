import React from 'react';
import { Link } from 'react-router-dom';
import heading from './styles/heading.module.css'

function Navbar() {
  return (
    <nav className={heading.navbar}>
      <Link className={heading.homebutton} to="/">Sign up</Link>
      <Link className={heading.signin} to="/sign_in">Sign in</Link>
    </nav>
  )
};

export default Navbar;