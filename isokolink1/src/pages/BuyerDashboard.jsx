import { Link } from "react-router";
import DashboardLayout from "./DashboardLayout";
import { ShoppingBag, Package, Heart } from "lucide-react";

function BuyerDashboard() {
  return (
    <DashboardLayout
      title="Buyer Dashboard"
      subtitle="Discover products and manage your purchases."
    >
      <div className="stats-grid">
        <div className="stat-card">
          <ShoppingBag />
          <p>My Orders</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <Package />
          <p>Completed Orders</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <Heart />
          <p>Saved Products</p>
          <h2>0</h2>
        </div>
      </div>

      <div className="dashboard-panel welcome-panel">
        <h2>Welcome to your Buyer Dashboard!</h2>
        <p>
          Explore agricultural products from farmers in Rubavu
          and discover fresh products for your needs.
        </p>

        <Link to="/marketplace" className="primary-button">
          Browse Marketplace →
        </Link>
      </div>

      <div className="dashboard-panel">
        <h2>Recent Orders</h2>
        <p className="empty-message">
          You have no orders yet. Your orders will appear here.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default BuyerDashboard;