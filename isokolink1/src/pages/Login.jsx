import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "buyer"
  });

  function handleSubmit(e) {
    e.preventDefault();

    const dashboards = {
      farmer: "/farmer-dashboard",
      buyer: "/buyer-dashboard",
      transporter: "/transporter-dashboard",
      admin: "/admin-dashboard"
    };

    navigate(dashboards[form.role]);
  }

  return (
    <section className="auth-section">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="auth-label">WELCOME BACK</span>
        <h2>Login to IsokoLink</h2>
        <p>Enter your details to continue.</p>

        <label>Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label>Password</label>
        <input
          type="password"
          required
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <label>Select Your Role</label>
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="buyer">Buyer</option>
          <option value="farmer">Farmer</option>
          <option value="transporter">Transporter</option>
          <option value="admin">Admin (demo only)</option>
        </select>

        <button type="submit" className="primary-button full-button">
          Login
        </button>

        <p className="auth-bottom">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>

        <small className="demo-note">
          Demo navigation only. Real account authentication will be added later.
        </small>
      </form>
    </section>
  );
}

export default Login;