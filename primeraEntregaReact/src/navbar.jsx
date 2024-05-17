import React from 'react';
import Style from './syle.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Goel</Link>  {}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/productos">Productos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
