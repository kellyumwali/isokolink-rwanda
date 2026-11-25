import { Link } from "react-router";
import { LayoutDashboard, Home, Store, LogOut } from "lucide-react";

function DashboardLayout({ title, subtitle, children }) {
  return (
    <section className="dashboard-page">
      <aside className="dashboard-sidebar">
        <Link to="/" className="dashboard-logo">
          🌱 IsokoLink
        </Link>

        <p className="sidebar-label">MENU</p>

        <Link to="/" className="sidebar-link">
          <Home size={19} /> Home
        </Link>

        <Link to="/marketplace" className="sidebar-link">
          <Store size={19} /> Marketplace
        </Link>

        <Link to="/farmer-dashboard" className="sidebar-link">
          <LayoutDashboard size={19} /> Farmer Dashboard
        </Link>

        <Link to="/buyer-dashboard" className="sidebar-link">
          <LayoutDashboard size={19} /> Buyer Dashboard
        </Link>

        <Link to="/transporter-dashboard" className="sidebar-link">
          <LayoutDashboard size={19} /> Transporter Dashboard
        </Link>

        <Link to="/admin-dashboard" className="sidebar-link">
          <LayoutDashboard size={19} /> Admin Dashboard
        </Link>

        <Link to="/login" className="sidebar-link logout-link">
          <LogOut size={19} /> Logout
        </Link>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <span className="dashboard-profile">🌱 IsokoLink User</span>
        </header>

        <div className="dashboard-content">
          {children}
        </div>
      </div>
    </section>
  );
}

export default DashboardLayout;