import { Link } from "react-router";
import { Sprout, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2><Sprout /> IsokoLink Rwanda</h2>
          <p>Connecting farmers, buyers and transporters.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/ai-assistant">AI Assistant</Link>
          <Link to="/login">Login</Link>
        </div>

        <div>
          <h3>Location</h3>
          <p><MapPin size={17} /> Rubavu, Rwanda</p>
        </div>
      </div>

      <p className="copyright">
        © 2026 IsokoLink Rwanda. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;