import DashboardLayout from "../components/DashboardLayout.jsx";
import { Truck, Package, CheckCircle } from "lucide-react";

function TransporterDashboard() {
  return (
    <DashboardLayout
      title="Transporter Dashboard"
      subtitle="Manage your agricultural delivery activities."
    >
      <div className="stats-grid">
        <div className="stat-card">
          <Truck />
          <p>Delivery Requests</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <Package />
          <p>Pending Deliveries</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <CheckCircle />
          <p>Completed Deliveries</p>
          <h2>0</h2>
        </div>
      </div>

      <div className="dashboard-panel">
        <h2>Delivery Management</h2>
        <p className="empty-message">
          New delivery requests will appear here.
        </p>
      </div>

      <div className="dashboard-panel">
        <h2>Delivery Information</h2>
        <p>
          You will be able to manage pickup locations, delivery destinations
          and delivery statuses in a future development stage.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default TransporterDashboard;
