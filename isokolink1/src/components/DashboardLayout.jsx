
import { Link, useNavigate } from "react-router";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Truck,
  Sprout,
  LogOut
} from "lucide-react";

function DashboardLayout({ title, children }) {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/login");
  }

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <Link to="/" className="dashboard-brand">
          <Sprout size={28} />
          IsokoLink Rwanda
        </Link>

        <nav className="dashboard-nav">
          <Link to="/farmer-dashboard">
            <LayoutDashboard size={18} />
            Farmer Dashboard
          </Link>

          <Link to="/buyer-dashboard">
            <ShoppingBag size={18} />
            Buyer Dashboard
          </Link>

          <Link to="/transporter-dashboard">
            <Truck size={18} />
            Transporter Dashboard
          </Link>

          <Link to="/admin-dashboard">
            <Users size={18} />
            Admin Dashboard
          </Link>

          <Link to="/marketplace">
            <ShoppingBag size={18} />
            Marketplace
          </Link>
        </nav>

        <button onClick={handleLogout} className="logout-button">
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>{title}</h1>
          <span>Welcome to IsokoLink Rwanda</span>
        </header>

        <section className="dashboard-content">
          {children}
        </section>
      </main>
    </div>
  );
}

export default DashboardLayout;
