import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
      <div className="nav-1">
        <h1 className="logo">BooksLAB</h1>

        {/* Desktop links */}
        <nav className="desktop-menu">
          <Link to="/home">Urdu Novels</Link>
          <Link to="/About">Ecat Books</Link>
          <Link to="/Coorses">Mcat Books</Link>
        </nav>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <button className="home-btn" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>

      {/* Mobile menu */}
      <nav className="mobile-menu">
        <Link to="/home" onClick={() => setMenuOpen(false)}>Urdu Novels</Link>
        <Link to="/About" onClick={() => setMenuOpen(false)}>Ecat Books</Link>
        <Link to="/Coorses" onClick={() => setMenuOpen(false)}>Mcat Books</Link>
      </nav>
    </div>
  );
}

export default Navebar;
