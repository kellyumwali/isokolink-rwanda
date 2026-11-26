
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Existing pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import TransporterDashboard from "./pages/TransporterDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AIAssistant from "./pages/AIAssistant";

// New components
import Translator from "./components/Translator";
import CurrencyExchange from "./components/CurrencyExchange";
import GroupSelling from "./components/GroupSelling";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Existing pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/marketplace" element={<Marketplace />} />

          {/* Existing dashboards */}
          <Route
            path="/farmer-dashboard"
            element={<FarmerDashboard />}
          />

          <Route
            path="/buyer-dashboard"
            element={<BuyerDashboard />}
          />

          <Route
            path="/transporter-dashboard"
            element={<TransporterDashboard />}
          />

          <Route
            path="/admin-dashboard"
            element={<AdminDashboard />}
          />

          {/* Existing AI assistant */}
          <Route
            path="/ai-assistant"
            element={<AIAssistant />}
          />

          {/* New IsokoLink features */}
          <Route
            path="/translator"
            element={<Translator />}
          />

          <Route
            path="/currency-exchange"
            element={<CurrencyExchange />}
          />

          <Route
            path="/group-selling"
            element={<GroupSelling />}
          />

          {/* Unknown pages */}
          <Route
            path="*"
            element={<h2 className="not-found">Page not found</h2>}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
