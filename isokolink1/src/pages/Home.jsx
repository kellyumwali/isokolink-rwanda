import { Link } from "react-router";
import {
  Sprout, ShoppingBasket, Truck, ArrowRight,
  Leaf, Coffee, Wheat, Apple
} from "lucide-react";

const categories = [
  { name: "Vegetables", icon: <Leaf /> },
  { name: "Fruits", icon: <Apple /> },
  { name: "Grains", icon: <Wheat /> },
  { name: "Potatoes", icon: <Sprout /> },
  { name: "Beans", icon: <ShoppingBasket /> },
  { name: "Coffee and Tea", icon: <Coffee /> },
  { name: "Livestock Products", icon: <Truck /> }
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">WELCOME TO ISOKOLINK RWANDA</span>

          <h1>
            Fresh Products. <br />
            Better Markets. <br />
            Stronger Farmers.
          </h1>

          <p>
            Connecting farmers directly with buyers and transporters
            through one agricultural marketplace.
          </p>

          <div className="hero-buttons">
            <Link to="/marketplace" className="primary-button">
              Explore Marketplace <ArrowRight size={18} />
            </Link>

            <Link to="/register" className="secondary-button">
              Join IsokoLink
            </Link>
          </div>

          <p className="hero-location">📍 Starting in Rubavu, Rwanda</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Explore Our Categories</h2>
          <p>Find agricultural products from local farmers.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to="/marketplace"
              className="category-card"
              key={category.name}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section benefits-section">
        <div className="section-heading">
          <span>OUR PLATFORM</span>
          <h2>One Platform, Many Opportunities</h2>
        </div>

        <div className="benefit-grid">
          <article className="benefit-card">
            <Sprout size={35} />
            <h3>For Farmers</h3>
            <p>Publish products and connect with potential buyers.</p>
            <Link to="/farmer-dashboard">Farmer Dashboard →</Link>
          </article>

          <article className="benefit-card">
            <ShoppingBasket size={35} />
            <h3>For Buyers</h3>
            <p>Discover agricultural products and manage purchases.</p>
            <Link to="/buyer-dashboard">Buyer Dashboard →</Link>
          </article>

          <article className="benefit-card">
            <Truck size={35} />
            <h3>For Transporters</h3>
            <p>Manage delivery requests and delivery information.</p>
            <Link to="/transporter-dashboard">Transporter Dashboard →</Link>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;