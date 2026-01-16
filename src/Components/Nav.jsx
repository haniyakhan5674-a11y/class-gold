import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  return (
    <div className="nav-1">
      <h1 className="logo">BooksLAB</h1>

      <nav className="nav-link">
        <Link to="/home" >Urdu Novels</Link>
        <Link to="/About" >Ecat Books</Link>
        <Link to="/Coorses" >Mcat Books</Link>
        {/* <Link to="/Coorses/Webdevelop" >Webdevelop</Link> */}
        {/* <Link to="/Coorses/Graphic" >Graphic</Link> */}

      </nav>

      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
}

export default Nav;
