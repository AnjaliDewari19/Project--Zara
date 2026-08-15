import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ZARA <span>COLLECTION</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="/#categories">Collections</a>
        <a href="/#reviews">Reviews</a>
        <a href="/#visit">Visit Us</a>
      </div>

      <a
        href="https://wa.me/919810425269"
        target="_blank"
        rel="noreferrer"
        className="nav-whatsapp"
      >
        WhatsApp
      </a>
      <a
        href="https://www.instagram.com/zara2006744/"
        target="_blank"
        rel="noreferrer"
        className="nav-insta"
      >
        Instagram
      </a>
    </nav>
  );
}

export default Navbar;