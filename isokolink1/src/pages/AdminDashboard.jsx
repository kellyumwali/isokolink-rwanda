import DashboardLayout from "../components/DashboardLayout";
import {
  Users, Package, ShoppingBag, BarChart3
} from "lucide-react";

function AdminDashboard() {
  return (
    <DashboardLayout
      title="Admin Dashboard"
      subtitle="Monitor and manage the IsokoLink platform."
    >
      <div className="stats-grid">
        <div className="stat-card">
          <Users />
          <p>Total Users</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <Package />
          <p>Total Products</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <ShoppingBag />
          <p>Total Orders</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <BarChart3 />
          <p>Platform Reports</p>
          <h2>0</h2>
        </div>
      </div>

      <div className="dashboard-panel">
        <h2>Platform Management</h2>

        <div className="admin-options">
          <article>
            <Users />
            <h3>User Management</h3>
            <p>Manage farmer, buyer and transporter accounts.</p>
          </article>

          <article>
            <Package />
            <h3>Product Management</h3>
            <p>Review agricultural products published on the platform.</p>
          </article>

          <article>
            <ShoppingBag />
            <h3>Order Management</h3>
            <p>Monitor platform orders and their statuses.</p>
          </article>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;