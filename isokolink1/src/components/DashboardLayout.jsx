
import { Link, useNavigate } from "react-router";

import {
  LayoutDashboard,
  Users,
  Sprout,
  LogOut,
  Languages,
  Coins,
  Handshake,
  UserRound,
  Store,
  Bot
} from "lucide-react";

function DashboardLayout({ title, children, role = "farmer" }) {
  const navigate = useNavigate();

  const navigation = [
    {
      label: "Dashboard",
      path: `/${role}-dashboard`,
      icon: LayoutDashboard,
      roles: ["farmer", "buyer", "transporter", "admin"]
    },
    {
      label: "Marketplace",
      path: "/marketplace",
      icon: Store,
      roles: ["farmer", "buyer", "transporter", "admin"]
    },
    {
      label: "Group Selling",
      path: "/group-selling",
      icon: Handshake,
      roles: ["farmer", "buyer", "admin"]
    },
    {
      label: "Currency Exchange",
      path: "/currency-exchange",
      icon: Coins,
      roles: ["farmer", "buyer", "admin"]
    },
    {
      label: "Translator",
      path: "/translator",
      icon: Languages,
      roles: ["farmer", "buyer", "transporter", "admin"]
    },
    {
      label: "AI Assistant",
      path: "/ai-assistant",
      icon: Bot,
      roles: ["farmer", "buyer", "transporter", "admin"]
    },
    {
      label: "My Account",
      path: "/account",
      icon: UserRound,
      roles: ["farmer", "buyer", "transporter", "admin"]
    }
  ];

  function handleLogout() {
    navigate("/login");
  }

  const visibleNavigation = navigation.filter((item) =>
    item.roles.includes(role)
  );

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <Link to="/" className="dashboard-brand">
          <Sprout size={28} />
          IsokoLink Rwanda
        </Link>

        <nav className="dashboard-nav">
          {visibleNavigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link to={item.path} key={item.path}>
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="logout-button"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>{title}</h1>
            <span>
              Welcome to IsokoLink Rwanda
            </span>
          </div>

          <div className="dashboard-role">
            <Users size={18} />
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </div>
        </header>

        <section className="dashboard-content">
          {children}
        </section>
      </main>
    </div>
  );
}

export default DashboardLayout;
