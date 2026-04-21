import { useState } from "react";
import "./Auth.css";

function Signin({ onSwitch, onLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields!");
      return;
    }
    onLogin(form.email);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-logo">🍽️</div>
        <h2>Welcome Back!</h2>
        <p className="auth-subtitle">Sign in to Peddi's Restaurant</p>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button className="auth-btn" onClick={handleSubmit}>
          Sign In
        </button>

        <p className="switch-text">
          Don't have an account?{" "}
          <span onClick={onSwitch}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Signin;