import { Link, NavLink } from "react-router";
import { Sprout, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <Sprout size={30} />
        <span>IsokoLink <b>Rwanda</b></span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/marketplace" onClick={closeMenu}>Marketplace</NavLink>
        <NavLink to="/ai-assistant" onClick={closeMenu}>AI Assistant</NavLink>

        <div className="dashboard-menu">
          <span>Dashboards ▾</span>
          <div className="dropdown-content">
            <Link to="/farmer-dashboard" onClick={closeMenu}>Farmer</Link>
            <Link to="/buyer-dashboard" onClick={closeMenu}>Buyer</Link>
            <Link to="/transporter-dashboard" onClick={closeMenu}>Transporter</Link>
            <Link to="/admin-dashboard" onClick={closeMenu}>Admin</Link>
          </div>
        </div>

        <Link to="/login" className="login-link" onClick={closeMenu}>
          Login
        </Link>

        <Link to="/register" className="nav-button" onClick={closeMenu}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;