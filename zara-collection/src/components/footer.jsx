import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>ZARA COLLECTION</h2>

        <div className="social-icons">
          <a
            href="https://wa.me/919810425269"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/zara2006744/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <p>Your Style, Your Choice! 🌸</p>
      </div>

      <div>
        <p>Stylish Kurtis, Farshi Suit , Layer Gown</p>
        <p>© 2026 ZARA COLLECTION. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;