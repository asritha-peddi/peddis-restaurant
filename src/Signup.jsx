import { useState } from "react";
import "./Auth.css";

function Signup({ onSwitch }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields!");
      return;
    }
    alert(`Welcome ${form.name}! Account created successfully! 🎉`);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-logo">🍽️</div>
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join Peddi's Restaurant family!</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
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
          Create Account
        </button>

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={onSwitch}>Sign In</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;