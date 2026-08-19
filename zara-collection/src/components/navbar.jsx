import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        ZARA
        <span>COLLECTION</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="/#categories">Collections</a>
        <a href="/#reviews">Reviews</a>
        <a href="/#visit">Visit Us</a>
      </div>

      <div className="nav-socials">
        <a
          href="https://wa.me/919810425269"
          target="_blank"
          rel="noreferrer"
          className="nav-whatsapp"
        >
        WhatsApp
        </a>

        <a
          href="https://instagram.com/zara2006744"
          target="_blank"
          rel="noreferrer"
          className="nav-instagram"
        >
        Instagram
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`menu-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <a href="/#categories" onClick={closeMenu}>
          Collections
        </a>

        <a href="/#reviews" onClick={closeMenu}>
          Reviews
        </a>

        <a href="/#visit" onClick={closeMenu}>
          Visit Us
        </a>

        <a
          href="https://wa.me/919810425269"
          target="_blank"
          rel="noreferrer"
          className="nav-whatsapp"
        >
        WhatsApp
        </a>

        <a
          href="https://instagram.com/zara2006744"
          target="_blank"
          rel="noreferrer"
          className="nav-instagram"
        >
        Instagram
        </a>
      </div>
    </nav>
  );
}

export default Navbar;