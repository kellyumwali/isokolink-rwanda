import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "farmer"
  });

  function handleSubmit(e) {
    e.preventDefault();

    alert("Registration form completed! Real account creation will be added later.");

    navigate("/login");
  }

  return (
    <section className="auth-section">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="auth-label">JOIN OUR COMMUNITY</span>
        <h2>Create an Account</h2>
        <p>Become part of IsokoLink Rwanda.</p>

        <label>Full Name</label>
        <input
          required
          placeholder="Enter your full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

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
          minLength={6}
          placeholder="Create a password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <label>Account Type</label>
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="farmer">Farmer</option>
          <option value="buyer">Buyer</option>
          <option value="transporter">Transporter</option>
        </select>

        <button type="submit" className="primary-button full-button">
          Create Account
        </button>

        <p className="auth-bottom">
          Already registered? <Link to="/login">Login here</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;