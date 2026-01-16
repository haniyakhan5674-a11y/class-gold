import React from 'react'
import { Link } from 'react-router-dom'

 function Footer () {

  return (
    <div>
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-box">
          <h2 className="footer-logo">📚 BookVerse</h2>
          <p>
            Discover a world of books. Read, learn, and grow with our
            carefully curated collection.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/books">Books</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Categories */}
        <div className="footer-box">
          <h3>Categories</h3>
          <Link to="/category/urdu">Urdu Books</Link>
          <Link to="/category/english">English Books</Link>
          <Link to="/category/ecat">ECAT Books</Link>
          <Link to="/category/islamic">Islamic Books</Link>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Pakistan</p>
          <p>📧 info@bookverse.com</p>
          <p>📞 +92 300 1234567</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 BookVerse | All Rights Reserved</p>
      </div>
    </footer>
 
    </div>
      
    
  )
}
export default Footer