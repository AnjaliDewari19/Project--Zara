import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import ReviewCard from "../components/ReviewCard";

function Home() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/data/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO</p>

          <h1>
            ZARA <span>COLLECTION</span>
          </h1>

          <h2>YOUR STYLE, YOUR CHOICE! 🌸</h2>

          <p className="hero-text">
            Stylish & comfortable kurtis starting from just
            <strong> ₹300</strong>.
          </p>

          <p className="hero-subtext">
            Choose your favourite design. Tell us your size.
            Get your style. 👗💕
          </p>

          <div className="hero-buttons">
            <a href="#categories" className="primary-button">
              Explore Collection
            </a>

            <a href="#visit" className="secondary-button">
              Visit Our Store
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <img src="https://i.pinimg.com/736x/b8/a2/ce/b8a2ce6b8ff199f0961976e636f660f7.jpg"
          alt="ZARA COLLECTION" />
        </div>
      </section>

      <section className="intro">
        <p className="section-label">STYLE THAT FITS YOU</p>

        <h2>Beautiful Designs. Pocket-Friendly Prices.</h2>

        <p>
          We bring you trendy and feminine designs at affordable prices.
          Choose your favourite style and tell us your size.
        </p>

        <div className="benefits">
          <div>
            <span>💕</span>
            <h3>Trendy Designs</h3>
            <p>Fresh and stylish looks.</p>
          </div>

          <div>
            <span>💰</span>
            <h3>Affordable</h3>
            <p>Short Kurtis from just ₹250.</p>
          </div>

          <div>
            <span>📏</span>
            <h3>Your Size</h3>
            <p>S, M, L, XL and more.</p>
          </div>

          <div>
            <span>🚚</span>
            <h3>Home Delivery</h3>
            <p>For Delhi NCR</p>
          </div>

          <div>
            <span>🧵</span>
            <h3>Comfortable Fabric</h3>
            <p>Selected with care.</p>
          </div>

          <div>
            <span>🎀</span>
            <h3>Customize Design</h3>
            <p>Get it stitched to your exact style.</p>
          </div>
        </div>
      </section>

      <section className="categories" id="categories">
        <div className="section-heading">
          <p className="section-label">EXPLORE</p>
          <h2>Choose Your Style</h2>
          <p>Find the design that matches your personality. 💕</p>
        </div>

        <div className="category-grid">
          <CategoryCard
            title="Short Kurti"
            description="Cute & comfortable everyday styles"
            category="short-kurti"
            image="https://m.media-amazon.com/images/I/51RQ+79gVTL._SL1500_.jpg"
          />

          <CategoryCard
            title="Long Kurti"
            description="Elegant & graceful long styles"
            category="long-kurti"
            image="https://images.meesho.com/images/products/1001041240/gerk6_512.webp?width=512"
          />

          <CategoryCard
            title="Farsi Suit"
            description="Traditional touch with modern style"
            category="farsi-suit"
            image="https://i.pinimg.com/736x/1b/d9/c1/1bd9c1b3d8b6aaea4eb3fc342b9a84b0.jpg"
          />

          <CategoryCard
            title="Layered Gown"
            description="Effortless grace meets contemporary design"
            category="layer-gown"
            image="https://m.media-amazon.com/images/I/517TAplayNL._SL1152_.jpg"
          />
        </div>
      </section>

      <section className="how-it-works">
        <div className="section-heading">
          <p className="section-label">HOW IT WORKS</p>
          <h2>Your Style in 3 Simple Steps</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Choose Your Design OR Customize </h3>
            <p>Browse our beautiful collection.<br />
            Also provide your own design.</p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Tell Us Your Size</h3>
            <p>Choose from available sizes.</p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Get Your Style</h3>
            <p>Visit us or order through WhatsApp.</p>
          </div>
        </div>
      </section>

      <section className="reviews-preview" id="reviews">
        <div className="section-heading">
          <p className="section-label">CUSTOMER LOVE</p>
          <h2>What Our Customers Say 💕</h2>
          <p>Real style, real smiles.</p>
        </div>

        <div className="review-grid">
          {reviews.slice(0, 6).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <Link to="/product/short-01" className="view-reviews-button">
          View Product Reviews
        </Link>
      </section>

      <section className="visit" id="visit">
        <div className="visit-content">
          <p className="section-label">COME VISIT US</p>

          <h2>See It. Feel It. Choose It. 🌸</h2>

          <p>
            Not sure about the design, fabric or size?
            Visit our store and explore the collection yourself.
          </p>

          <div className="address-box">
            <h3>📍 ZARA COLLECTION</h3>

            <p>
              Lok priya vihar,<br />
              Near Modern Convent Junior School<br />
              2 Pusta, Khora Colony, 201010.
              <br />
              Ghaziabad, Uttar Pradesh<br />
              India
            </p>

            <p>🕐 Mon – Sun: 10:00 AM – 8:00 PM</p>
          </div>

          <div className="visit-buttons">
            <a
              href="https://www.google.com/maps/place/Modern+Convent+Junior+High+School/@28.6307172,77.3450687,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5bd028480cb:0xfcf47af126f099db!8m2!3d28.6307172!4d77.3450687!16s%2Fg%2F11h3wjtc2j?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              📍 Get Directions
            </a>

            <a
              href="https://wa.me/919810425269"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              💬 WhatsApp Us
            </a>

          <a
              href="https://www.instagram.com/zara2006744/"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              💌 Follow Us
            </a>
          </div>
        </div>

        <div className="visit-card">
          <div>🛍️</div>
          <h3>Visit Before You Buy</h3>
          <p>
            Check the fabric, colour and fitting personally
            and shop with confidence.
          </p>
        </div>
      </section>

      <section className="final-cta">
        <h2>Good Style Doesn't Have to Be Expensive! ✨</h2>
        <p>Stylish Kurti. Your Choice. Pocket-Friendly Price.</p>

        <a
          href="https://wa.me/919810425269"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          💬 DM NOW TO ORDER
        </a>
      </section>
    </>
  );
}

export default Home;